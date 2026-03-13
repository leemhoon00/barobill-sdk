import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs';
import { join } from 'path';

const ROOT = join(__dirname, '..');
const PACKAGES_DIR = join(ROOT, 'packages');

const SERVICES: Array<{
  pkg: string;
  wsdlName: string;
  className: string;
}> = [
  { pkg: 'ti', wsdlName: 'TI', className: 'TiClient' },
  { pkg: 'cashbill', wsdlName: 'CASHBILL', className: 'CashbillClient' },
  { pkg: 'edoc', wsdlName: 'EDOC', className: 'EdocClient' },
  { pkg: 'card', wsdlName: 'CARD', className: 'CardClient' },
  { pkg: 'bankaccount', wsdlName: 'BANKACCOUNT', className: 'BankAccountClient' },
  { pkg: 'corpstate', wsdlName: 'CORPSTATE', className: 'CorpStateClient' },
  { pkg: 'sms', wsdlName: 'SMS', className: 'SmsClient' },
  { pkg: 'fax', wsdlName: 'FAX', className: 'FaxClient' },
  { pkg: 'kakaotalk', wsdlName: 'KAKAOTALK', className: 'KakaoTalkClient' },
];

interface MethodInfo {
  /** e.g. "SendSMSMessage" */
  soapMethodName: string;
  /** e.g. "SendSmsMessage" (the param type name) */
  paramTypeName: string;
  /** e.g. "SendSmsMessageResponse" */
  responseTypeName: string;
  /** e.g. "sendSmsMessage" (camelCase wrapper method name) */
  wrapperMethodName: string;
  /** 'both' | 'certKeyOnly' | 'none' */
  authMode: 'both' | 'certKeyOnly' | 'none';
}

/**
 * Parse the interface from client.ts to extract method signatures.
 * Only takes the first occurrence of each method (ignores SOAP12 duplicates).
 */
function parseClientInterface(clientTs: string): Array<{
  soapMethodName: string;
  paramTypeName: string;
  responseTypeName: string;
}> {
  // Match: MethodNameAsync(paramName: ParamType, options?: ...): Promise<[result: ResponseType, ...]>
  const methodRegex = /^\s+(\w+)Async\(\w+:\s+(\w+),\s+options\?.*?Promise<\[result:\s+(\w+)/gm;
  const methods: Array<{ soapMethodName: string; paramTypeName: string; responseTypeName: string }> = [];
  const seen = new Set<string>();

  let match: RegExpExecArray | null;
  while ((match = methodRegex.exec(clientTs)) !== null) {
    const soapMethodName = match[1];
    // Skip SOAP12 duplicates (same method name, different types with "1" suffix)
    if (seen.has(soapMethodName)) continue;
    seen.add(soapMethodName);
    methods.push({
      soapMethodName,
      paramTypeName: match[2],
      responseTypeName: match[3],
    });
  }

  return methods;
}

/**
 * Read a definition file and check if it has CERTKEY and/or CorpNum fields.
 */
function detectAuthMode(definitionsDir: string, paramTypeName: string): 'both' | 'certKeyOnly' | 'none' {
  const filePath = join(definitionsDir, `${paramTypeName}.ts`);
  if (!existsSync(filePath)) {
    // Fallback: assume both
    return 'both';
  }

  const content = readFileSync(filePath, 'utf-8');
  const hasCertKey = content.includes('CERTKEY');
  const hasCorpNum = content.includes('CorpNum');

  if (hasCertKey && hasCorpNum) return 'both';
  if (hasCertKey) return 'certKeyOnly';
  return 'none';
}

/**
 * Convert a PascalCase/UPPERCASE method name to camelCase.
 * e.g., "SendSMSMessage" → "sendSMSMessage"
 *       "GetCorpState" → "getCorpState"
 *       "CheckCERTIsValid" → "checkCERTIsValid"
 */
function toCamelCase(name: string): string {
  return name.charAt(0).toLowerCase() + name.slice(1);
}

/**
 * Determine the correct Omit type based on auth mode.
 */
function getParamType(paramTypeName: string, authMode: 'both' | 'certKeyOnly' | 'none'): string {
  switch (authMode) {
    case 'both':
      return `Omit<${paramTypeName}, 'CERTKEY' | 'CorpNum'>`;
    case 'certKeyOnly':
      return `Omit<${paramTypeName}, 'CERTKEY'>`;
    case 'none':
      return paramTypeName;
  }
}

/**
 * Determine which base client method to call based on auth mode.
 */
function getCallMethod(authMode: 'both' | 'certKeyOnly' | 'none'): string {
  switch (authMode) {
    case 'both': return 'this.call';
    case 'certKeyOnly': return 'this.callWithCertKeyOnly';
    case 'none': return 'this.callRaw';
  }
}

function generateWrapper(service: typeof SERVICES[number]): void {
  const generatedDir = join(PACKAGES_DIR, service.pkg, 'src', 'generated');
  const clientTsPath = join(generatedDir, 'client.ts');
  const definitionsDir = join(generatedDir, 'definitions');

  if (!existsSync(clientTsPath)) {
    console.error(`  ERROR: ${clientTsPath} not found, skipping.`);
    return;
  }

  const clientTs = readFileSync(clientTsPath, 'utf-8');
  const rawMethods = parseClientInterface(clientTs);

  // Detect auth mode for each method
  const methods: MethodInfo[] = rawMethods.map((m) => ({
    ...m,
    wrapperMethodName: toCamelCase(m.soapMethodName),
    authMode: detectAuthMode(definitionsDir, m.paramTypeName),
  }));

  console.log(`  Found ${methods.length} methods`);

  // Collect all needed imports (param types and response types)
  const imports: string[] = [];
  for (const m of methods) {
    imports.push(`import type { ${m.paramTypeName} } from './generated/definitions/${m.paramTypeName}';`);
    imports.push(`import type { ${m.responseTypeName} } from './generated/definitions/${m.responseTypeName}';`);
  }

  // Generate method bodies
  const methodBodies: string[] = methods.map((m) => {
    const paramType = getParamType(m.paramTypeName, m.authMode);
    const callMethod = getCallMethod(m.authMode);
    const hasParams = m.authMode !== 'none' || hasNonAuthFields(definitionsDir, m.paramTypeName);

    if (m.authMode === 'none' && !hasParams) {
      // No params at all (like Ping)
      return `  async ${m.wrapperMethodName}(): Promise<${m.responseTypeName}> {
    return ${callMethod}<${m.responseTypeName}>('${m.soapMethodName}', {});
  }`;
    }

    return `  async ${m.wrapperMethodName}(params: ${paramType}): Promise<${m.responseTypeName}> {
    return ${callMethod}<${m.responseTypeName}>('${m.soapMethodName}', params);
  }`;
  });

  // Generate the client file
  const output = `// This file is auto-generated by scripts/generate-wrapper.ts
// Do not edit manually.

import { BaseBarobillClient, BarobillConfig, ServiceName } from '@barobill-sdk/core';
${imports.join('\n')}

export class ${service.className} extends BaseBarobillClient {
  protected get serviceName(): ServiceName {
    return '${service.wsdlName}';
  }

  static async create(config: BarobillConfig): Promise<${service.className}> {
    const client = new ${service.className}(config);
    await client.init();
    return client;
  }

${methodBodies.join('\n\n')}
}
`;

  const outputPath = join(PACKAGES_DIR, service.pkg, 'src', 'client.ts');
  writeFileSync(outputPath, output, 'utf-8');
  console.log(`  → Written ${outputPath}`);

  // Generate index.ts that re-exports client + all generated types
  const indexOutput = `// This file is auto-generated by scripts/generate-wrapper.ts
export { ${service.className} } from './client';
export type { BarobillConfig } from '@barobill-sdk/core';
export * from './generated/index';
`;
  const indexPath = join(PACKAGES_DIR, service.pkg, 'src', 'index.ts');
  writeFileSync(indexPath, indexOutput, 'utf-8');
  console.log(`  → Written ${indexPath}`);
}

/**
 * Check if a definition has fields beyond CERTKEY/CorpNum
 */
function hasNonAuthFields(definitionsDir: string, paramTypeName: string): boolean {
  const filePath = join(definitionsDir, `${paramTypeName}.ts`);
  if (!existsSync(filePath)) return true;

  const content = readFileSync(filePath, 'utf-8');
  // Count properties that are not CERTKEY or CorpNum
  const propRegex = /(\w+)\??\s*:/g;
  let match: RegExpExecArray | null;
  while ((match = propRegex.exec(content)) !== null) {
    const propName = match[1];
    if (propName !== 'CERTKEY' && propName !== 'CorpNum') {
      return true;
    }
  }
  return false;
}

// Main
console.log('Generating wrapper clients...\n');
for (const service of SERVICES) {
  console.log(`Processing ${service.pkg} (${service.className})...`);
  generateWrapper(service);
  console.log();
}
console.log('Done!');

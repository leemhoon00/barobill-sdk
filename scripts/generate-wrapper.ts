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
  {
    pkg: 'bankaccount',
    wsdlName: 'BANKACCOUNT',
    className: 'BankAccountClient',
  },
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
 * 모든 서비스에 공통으로 존재하는 구버전 SOAP 메서드.
 * (공통 요금/인증 관련 API — 9개 WSDL 모두에 동일 이름으로 노출됨)
 */
const COMMON_DEPRECATED_METHODS: Record<string, string> = {
  GetBalanceCostAmount:
    '구버전 API입니다. `getBalanceCostAmountEx`를 사용하세요.',
  GetBalanceCostAmountOfInterOP:
    '구버전 API입니다. `getBalanceCostAmountOfInterOPEx`를 사용하세요.',
  GetChargeUnitCost: '구버전 API입니다. `getChargeUnitCostEx`를 사용하세요.',
  CheckChargeable: '구버전 API입니다. 신규 개발 시 사용이 권장되지 않습니다.',
};

/**
 * 서비스별 구버전 SOAP 메서드. 키는 SERVICES[].pkg (예: 'ti').
 * 같은 SOAP 메서드 이름이 다른 서비스에도 존재할 수 있으므로 서비스 단위로 한정한다.
 */
const DEPRECATED_METHODS: Record<string, Record<string, string>> = {
  ti: {
    RegistAndReverseIssueTaxInvoice:
      '구버전 API입니다. `registAndReverseIssueTaxInvoiceEx`를 사용하세요.',
    CheckMgtNumIsExists:
      '구버전 API입니다. 신규 개발 시 사용이 권장되지 않습니다.',
    CheckIsValidTaxInvoice:
      '구버전 API입니다. 신규 개발 시 사용이 권장되지 않습니다.',
    RegistTaxInvoice: '구버전 API입니다. `registTaxInvoiceEX`를 사용하세요.',
    RegistBrokerTaxInvoice:
      '구버전 API입니다. `registBrokerTaxInvoiceEX`를 사용하세요.',
    RegistTaxInvoiceReverse:
      '구버전 API입니다. `registTaxInvoiceReverseEX`를 사용하세요.',
    RegistModifyTaxInvoice:
      '구버전 API입니다. `registTaxInvoiceEX`를 사용하세요.',
    RegistModifyTaxInvoiceEX:
      '구버전 API입니다. `registTaxInvoiceEX`를 사용하세요.',
    RegistModifyBrokerTaxInvoice:
      '구버전 API입니다. `registBrokerTaxInvoiceEX`를 사용하세요.',
    RegistModifyBrokerTaxInvoiceEX:
      '구버전 API입니다. `registBrokerTaxInvoiceEX`를 사용하세요.',
    UpdateTaxInvoice: '구버전 API입니다. `updateTaxInvoiceEX`를 사용하세요.',
    UpdateBrokerTaxInvoice:
      '구버전 API입니다. `updateBrokerTaxInvoiceEX`를 사용하세요.',
    IssueTaxInvoice: '구버전 API입니다. `issueTaxInvoiceEx`를 사용하세요.',
    PreIssueTaxInvoice:
      '구버전 API입니다. `preIssueTaxInvoiceEx`를 사용하세요.',
    ReverseIssueTaxInvoice:
      '구버전 API입니다. `reverseIssueTaxInvoiceEx`를 사용하세요.',
    GetTaxInvoiceState:
      '구버전 API입니다. `getTaxInvoiceStateEX`를 사용하세요.',
    GetTaxInvoiceStates:
      '구버전 API입니다. `getTaxInvoiceStatesEX`를 사용하세요.',
    GetTaxInvoiceSalesList:
      '구버전 API입니다. `getDailyTaxInvoiceSalesList`를 사용하세요.',
    GetTaxInvoiceSalesListEx:
      '구버전 API입니다. `getDailyTaxInvoiceSalesList`를 사용하세요.',
    GetTaxInvoicePurchaseList:
      '구버전 API입니다. `getDailyTaxInvoicePurchaseList`를 사용하세요.',
    GetTaxInvoicePurchaseListEx:
      '구버전 API입니다. `getDailyTaxInvoicePurchaseList`를 사용하세요.',
    GetPeriodTaxInvoiceSalesList:
      '구버전 API입니다. `getPeriodTaxInvoiceSalesListEx`를 사용하세요.',
    GetPeriodTaxInvoicePurchaseList:
      '구버전 API입니다. `getPeriodTaxInvoicePurchaseListEx`를 사용하세요.',
    GetDailyTaxInvoiceSalesList:
      '구버전 API입니다. `getDailyTaxInvoiceSalesListEx`를 사용하세요.',
    GetDailyTaxInvoicePurchaseList:
      '구버전 API입니다. `getDailyTaxInvoicePurchaseListEx`를 사용하세요.',
    GetMonthlyTaxInvoiceSalesList:
      '구버전 API입니다. `getMonthlyTaxInvoiceSalesListEx`를 사용하세요.',
    GetMonthlyTaxInvoicePurchaseList:
      '구버전 API입니다. `getMonthlyTaxInvoicePurchaseListEx`를 사용하세요.',
    GetAttachedFileList:
      '구버전 API입니다. `getAttachedFileListEx`를 사용하세요.',
    ReSendEmail: '구버전 API입니다. `sendEmailEx`를 사용하세요.',
    ReSendSMS: '구버전 API입니다. 신규 개발 시 사용이 권장되지 않습니다.',
    SendInvoiceSMS: '구버전 API입니다. `sendMessageEx`를 사용하세요.',
    SendInvoiceFax: '구버전 API입니다. `sendFaxEx`를 사용하세요.',
    RegistTaxInvoiceScrap:
      '구버전 API입니다. `registTaxInvoiceScrapEx`를 사용하세요.',
    UpdateTaxInvoiceScrap:
      '구버전 API입니다. `updateTaxInvoiceScrapEx`를 사용하세요.',
  },
  cashbill: {
    CheckMgtKeyIsExists:
      '구버전 API입니다. 신규 개발 시 사용이 권장되지 않습니다.',
    CheckIsValidCashBill:
      '구버전 API입니다. 신규 개발 시 사용이 권장되지 않습니다.',
    CheckIsValidCashBillEx:
      '구버전 API입니다. 신규 개발 시 사용이 권장되지 않습니다.',
    RegistCashBill: '구버전 API입니다. `registCashBillEx`를 사용하세요.',
    UpdateCashBill: '구버전 API입니다. `updateCashBillEx`를 사용하세요.',
    CancelCashBill: '구버전 API입니다. `cancelCashBillEx`를 사용하세요.',
    CancelCashBillPartial:
      '구버전 API입니다. `cancelCashBillPartialEx`를 사용하세요.',
    GetCashBill: '구버전 API입니다. `getCashBillEx`를 사용하세요.',
    GetCashBillSalesList:
      '구버전 API입니다. `getDailyCashBillSalesListEx`를 사용하세요.',
    GetCashBillPurchaseList:
      '구버전 API입니다. `getDailyCashBillPurchaseListEx`를 사용하세요.',
    GetPeriodCashBillSalesList:
      '구버전 API입니다. `getPeriodCashBillSalesListEx`를 사용하세요.',
    GetPeriodCashBillPurchaseList:
      '구버전 API입니다. `getPeriodCashBillPurchaseListEx`를 사용하세요.',
    GetDailyCashBillSalesList:
      '구버전 API입니다. `getDailyCashBillSalesListEx`를 사용하세요.',
    GetDailyCashBillPurchaseList:
      '구버전 API입니다. `getDailyCashBillPurchaseListEx`를 사용하세요.',
    GetMonthlyCashBillSalesList:
      '구버전 API입니다. `getMonthlyCashBillSalesListEx`를 사용하세요.',
    GetMonthlyCashBillPurchaseList:
      '구버전 API입니다. `getMonthlyCashBillPurchaseListEx`를 사용하세요.',
    SendEmail: '구버전 API입니다. `sendEmailEx`를 사용하세요.',
    SendSMS: '구버전 API입니다. `sendMessageEx`를 사용하세요.',
    SendFax: '구버전 API입니다. `sendFaxEx`를 사용하세요.',
    RegistCashBillScrap:
      '구버전 API입니다. `registCashBillScrapEx`를 사용하세요.',
    UpdateCashBillScrap:
      '구버전 API입니다. `updateCashBillScrapEx`를 사용하세요.',
  },
  edoc: {
    CheckMgtKeyIsExists:
      '구버전 API입니다. 신규 개발 시 사용이 권장되지 않습니다.',
    CheckIsValidEDoc:
      '구버전 API입니다. 신규 개발 시 사용이 권장되지 않습니다.',
    SendEmail: '구버전 API입니다. `sendEmailEx`를 사용하세요.',
    SendSMS: '구버전 API입니다. `sendMessageEx`를 사용하세요.',
    SendFax: '구버전 API입니다. `sendFaxEx`를 사용하세요.',
  },
};

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
  const methodRegex =
    /^\s+(\w+)Async\(\w+:\s+(\w+),\s+options\?.*?Promise<\[result:\s+(\w+)/gm;
  const methods: Array<{
    soapMethodName: string;
    paramTypeName: string;
    responseTypeName: string;
  }> = [];
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
function detectAuthMode(
  definitionsDir: string,
  paramTypeName: string,
): 'both' | 'certKeyOnly' | 'none' {
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
function getParamType(
  paramTypeName: string,
  authMode: 'both' | 'certKeyOnly' | 'none',
): string {
  switch (authMode) {
    case 'both':
      return `Omit<${paramTypeName}, 'CERTKEY'> & { CorpNum?: string }`;
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
    case 'both':
      return 'this.call';
    case 'certKeyOnly':
      return 'this.callWithCertKeyOnly';
    case 'none':
      return 'this.callRaw';
  }
}

function generateWrapper(service: (typeof SERVICES)[number]): void {
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

  const serviceDeprecations = DEPRECATED_METHODS[service.pkg] ?? {};

  // Collect all needed imports (param types and response types)
  const imports: string[] = [];
  for (const m of methods) {
    imports.push(
      `import type { ${m.paramTypeName} } from './generated/definitions/${m.paramTypeName}';`,
    );
    imports.push(
      `import type { ${m.responseTypeName} } from './generated/definitions/${m.responseTypeName}';`,
    );
  }

  // Generate method bodies
  const methodBodies: string[] = methods.map((m) => {
    const paramType = getParamType(m.paramTypeName, m.authMode);
    const callMethod = getCallMethod(m.authMode);
    const hasParams =
      m.authMode !== 'none' ||
      hasNonAuthFields(definitionsDir, m.paramTypeName);

    const deprecatedMsg =
      COMMON_DEPRECATED_METHODS[m.soapMethodName] ??
      serviceDeprecations[m.soapMethodName];
    const jsdoc = deprecatedMsg
      ? `  /**\n   * @deprecated ${deprecatedMsg}\n   */\n`
      : '';

    if (m.authMode === 'none' && !hasParams) {
      // No params at all (like Ping)
      return `${jsdoc}  async ${m.wrapperMethodName}(): Promise<${m.responseTypeName}> {
    return ${callMethod}<${m.responseTypeName}>('${m.soapMethodName}', {});
  }`;
    }

    return `${jsdoc}  async ${m.wrapperMethodName}(params: ${paramType}): Promise<${m.responseTypeName}> {
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
function hasNonAuthFields(
  definitionsDir: string,
  paramTypeName: string,
): boolean {
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

import { execSync } from 'child_process';
import { existsSync, mkdirSync, rmSync, cpSync } from 'fs';
import { join } from 'path';

const ROOT = join(__dirname, '..');
const WSDL_DIR = join(ROOT, 'wsdl');
const PACKAGES_DIR = join(ROOT, 'packages');
const TEMP_DIR = join(ROOT, '.temp-generated');

const SERVICES = [
  { wsdl: 'TI', pkg: 'ti' },
  { wsdl: 'CASHBILL', pkg: 'cashbill' },
  { wsdl: 'EDOC', pkg: 'edoc' },
  { wsdl: 'CARD', pkg: 'card' },
  { wsdl: 'BANKACCOUNT', pkg: 'bankaccount' },
  { wsdl: 'CORPSTATE', pkg: 'corpstate' },
  { wsdl: 'SMS', pkg: 'sms' },
  { wsdl: 'FAX', pkg: 'fax' },
  { wsdl: 'KAKAOTALK', pkg: 'kakaotalk' },
] as const;

// Clean temp dir
if (existsSync(TEMP_DIR)) {
  rmSync(TEMP_DIR, { recursive: true });
}
mkdirSync(TEMP_DIR, { recursive: true });

for (const { wsdl, pkg } of SERVICES) {
  const wsdlFile = join(WSDL_DIR, `${wsdl}.wsdl`);
  const tempOut = join(TEMP_DIR, pkg);

  console.log(`Generating types for ${wsdl}...`);
  execSync(`npx wsdl-tsclient ${wsdlFile} -o ${tempOut}`, {
    cwd: ROOT,
    stdio: 'inherit',
  });

  // wsdl-tsclient outputs into a subfolder named after the wsdl service
  // Find the actual output directory
  const generatedDir = join(PACKAGES_DIR, pkg, 'src', 'generated');
  if (existsSync(generatedDir)) {
    rmSync(generatedDir, { recursive: true });
  }
  mkdirSync(generatedDir, { recursive: true });

  // Copy generated output to package
  cpSync(tempOut, generatedDir, { recursive: true });
  console.log(`  → Copied to packages/${pkg}/src/generated/`);
}

// Clean up temp
rmSync(TEMP_DIR, { recursive: true });

console.log('\nDone! All types generated.');

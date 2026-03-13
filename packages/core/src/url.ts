export const SERVICE_NAMES = ['TI', 'CASHBILL', 'CARD', 'EDOC', 'BANKACCOUNT', 'CORPSTATE', 'FAX', 'KAKAOTALK', 'SMS'] as const;

export type ServiceName = typeof SERVICE_NAMES[number];

export function resolveWsdlUrl(service: ServiceName, test: boolean): string {
  const host = test ? 'testws.baroservice.com' : 'ws.baroservice.com';
  return `https://${host}/${service}.asmx?wsdl`;
}

import { Client as SoapClient, createClientAsync } from 'soap';
import { BarobillConfig } from './types';
import { ServiceName, resolveWsdlUrl } from './url';

export abstract class BaseBarobillClient {
  protected soapClient!: SoapClient;
  protected readonly config: Required<BarobillConfig>;

  constructor(config: BarobillConfig) {
    this.config = { test: false, ...config };
  }

  protected abstract get serviceName(): ServiceName;

  async init(): Promise<this> {
    const url = resolveWsdlUrl(this.serviceName, this.config.test);
    this.soapClient = await createClientAsync(url);
    return this;
  }

  /** CERTKEY + CorpNum 자동 주입 */
  protected async call<TResult>(
    methodName: string,
    params: Record<string, any>,
  ): Promise<TResult> {
    const fullParams = {
      CERTKEY: this.config.certKey,
      CorpNum: this.config.corpNum,
      ...params,
    };
    const [result] = await (this.soapClient as any)[`${methodName}Async`](fullParams);
    return result;
  }

  /** CERTKEY만 주입 (CorpNum 없음) */
  protected async callWithCertKeyOnly<TResult>(
    methodName: string,
    params: Record<string, any>,
  ): Promise<TResult> {
    const fullParams = {
      CERTKEY: this.config.certKey,
      ...params,
    };
    const [result] = await (this.soapClient as any)[`${methodName}Async`](fullParams);
    return result;
  }

  /** 인증 파라미터 없이 호출 (Ping 등) */
  protected async callRaw<TResult>(
    methodName: string,
    params: Record<string, any>,
  ): Promise<TResult> {
    const [result] = await (this.soapClient as any)[`${methodName}Async`](params);
    return result;
  }
}

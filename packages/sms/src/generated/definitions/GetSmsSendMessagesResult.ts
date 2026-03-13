import { GetSmsSendMessageResult } from "./GetSmsSendMessageResult";

/**
 * GetSMSSendMessagesResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetSmsSendMessagesResult {
    /** SMSMessage[] */
    SMSMessage?: Array<GetSmsSendMessageResult>;
}

import { GetSmsSendMessagesResult } from "./GetSmsSendMessagesResult";

/**
 * GetSMSSendMessagesByPagingResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetSmsSendMessagesByPagingResult {
    /** s:int */
    CurrentPage?: number;
    /** s:int */
    MaxIndex?: number;
    /** s:int */
    CountPerPage?: number;
    /** s:int */
    MaxPageNum?: number;
    /** MessageList */
    MessageList?: GetSmsSendMessagesResult;
}

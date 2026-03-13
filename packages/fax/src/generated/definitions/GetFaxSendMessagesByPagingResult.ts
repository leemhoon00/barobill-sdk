import { Messages } from "./Messages";

/**
 * GetFaxSendMessagesByPagingResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetFaxSendMessagesByPagingResult {
    /** s:int */
    CurrentPage?: number;
    /** s:int */
    MaxIndex?: number;
    /** s:int */
    CountPerPage?: number;
    /** s:int */
    MaxPageNum?: number;
    /** MessageList */
    MessageList?: Messages;
}

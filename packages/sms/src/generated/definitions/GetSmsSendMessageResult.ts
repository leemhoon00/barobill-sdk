
/**
 * GetSMSSendMessageResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetSmsSendMessageResult {
    /** s:string */
    SendKey?: string;
    /** s:string */
    ID?: string;
    /** s:string */
    SenderNum?: string;
    /** s:string */
    ReceiverName?: string;
    /** s:string */
    ReceiverNum?: string;
    /** s:string */
    Message?: string;
    /** s:string */
    SendDT?: string;
    /** s:string */
    RefKey?: string;
    /** s:int */
    SendState?: number;
}


/**
 * XMSMessage
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface XmsMessage {
    /** s:string */
    SenderNum?: string;
    /** s:string */
    ReceiverName?: string;
    /** s:string */
    ReceiverNum?: string;
    /** s:string */
    Message?: string;
    /** s:string */
    RefKey?: string;
}

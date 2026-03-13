
/** SendMMSMessage */
export interface SendMmsMessage {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    SenderID?: string;
    /** s:string */
    FromNumber?: string;
    /** s:string */
    ToName?: string;
    /** s:string */
    ToNumber?: string;
    /** s:string */
    TXTSubject?: string;
    /** s:string */
    TXTMESSAGE?: string;
    /** s:base64Binary */
    ImageFile?: string;
    /** s:string */
    SendDT?: string;
    /** s:string */
    RefKey?: string;
}

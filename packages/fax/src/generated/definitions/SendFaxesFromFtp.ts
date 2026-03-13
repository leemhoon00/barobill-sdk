import { Messages } from "./Messages";

/** SendFaxesFromFTP */
export interface SendFaxesFromFtp {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    SenderID?: string;
    /** s:string */
    FileName?: string;
    /** s:int */
    SendCount?: number;
    /** Messages */
    Messages?: Messages;
    /** s:string */
    SendDT?: string;
}

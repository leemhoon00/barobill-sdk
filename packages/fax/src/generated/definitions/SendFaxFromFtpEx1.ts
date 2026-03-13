import { SendFaxesFromFtpResult } from "./SendFaxesFromFtpResult";

/** SendFaxFromFTPEx */
export interface SendFaxFromFtpEx1 {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    SenderID?: string;
    /** s:int */
    FileCount?: number;
    /** FileNames */
    FileNames?: SendFaxesFromFtpResult;
    /** s:string */
    FromNumber?: string;
    /** s:string */
    ToNumber?: string;
    /** s:string */
    ReceiveCorp?: string;
    /** s:string */
    ReceiveName?: string;
    /** s:string */
    SendDT?: string;
    /** s:string */
    RefKey?: string;
}

import { SendFaxesFromFtpResult } from "./SendFaxesFromFtpResult";
import { Messages } from "./Messages";

/** SendFaxesFromFTPEx */
export interface SendFaxesFromFtpEx1 {
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
    /** s:int */
    SendCount?: number;
    /** Messages */
    Messages?: Messages;
    /** s:string */
    SendDT?: string;
}

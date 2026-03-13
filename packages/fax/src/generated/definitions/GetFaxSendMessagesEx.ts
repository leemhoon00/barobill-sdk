import { SendFaxesFromFtpResult } from "./SendFaxesFromFtpResult";

/** GetFaxSendMessagesEx */
export interface GetFaxSendMessagesEx {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** SendKeyList */
    SendKeyList?: SendFaxesFromFtpResult;
}

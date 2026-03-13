import { SendFaxesFromFtpResult } from "./SendFaxesFromFtpResult";

/** GetFaxSendMessages */
export interface GetFaxSendMessages {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** SendKeyList */
    SendKeyList?: SendFaxesFromFtpResult;
}

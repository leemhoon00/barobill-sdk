import { SendFaxesFromFtpResult } from "./SendFaxesFromFtpResult";

/** GetFaxMessagesEx2 */
export interface GetFaxMessagesEx2 {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** SendKeyList */
    SendKeyList?: SendFaxesFromFtpResult;
}

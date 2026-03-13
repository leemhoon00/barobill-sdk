import { SendAtKakaotalksResult } from "./SendAtKakaotalksResult";

/** GetSendKakaotalksEx */
export interface GetSendKakaotalksEx {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** SendKeyList */
    SendKeyList?: SendAtKakaotalksResult;
}

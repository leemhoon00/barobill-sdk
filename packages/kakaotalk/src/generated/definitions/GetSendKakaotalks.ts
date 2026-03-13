import { SendAtKakaotalksResult } from "./SendAtKakaotalksResult";

/** GetSendKakaotalks */
export interface GetSendKakaotalks {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** SendKeyList */
    SendKeyList?: SendAtKakaotalksResult;
}

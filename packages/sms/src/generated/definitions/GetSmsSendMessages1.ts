import { SendKeyList } from "./SendKeyList";

/** GetSMSSendMessages */
export interface GetSmsSendMessages1 {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** SendKeyList */
    SendKeyList?: SendKeyList;
}

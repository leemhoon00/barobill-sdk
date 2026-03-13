import { SendKeyList } from "./SendKeyList";

/** GetSMSSendMessages */
export interface GetSmsSendMessages {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** SendKeyList */
    SendKeyList?: SendKeyList;
}

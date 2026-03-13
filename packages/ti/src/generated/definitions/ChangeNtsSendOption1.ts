import { GetNtsSendOptionResult } from "./GetNtsSendOptionResult";

/** ChangeNTSSendOption */
export interface ChangeNtsSendOption1 {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    ID?: string;
    /** NTSSendOption */
    NTSSendOption?: GetNtsSendOptionResult;
}

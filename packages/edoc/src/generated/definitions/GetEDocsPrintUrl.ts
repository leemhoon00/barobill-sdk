import { MgtKeyList } from "./MgtKeyList";

/** GetEDocsPrintURL */
export interface GetEDocsPrintUrl {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    UserID?: string;
    /** s:string */
    PWD?: string;
    /** MgtKeyList */
    MgtKeyList?: MgtKeyList;
}

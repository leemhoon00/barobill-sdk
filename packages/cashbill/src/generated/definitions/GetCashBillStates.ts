import { MgtKeyList } from "./MgtKeyList";

/** GetCashBillStates */
export interface GetCashBillStates {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    UserID?: string;
    /** MgtKeyList */
    MgtKeyList?: MgtKeyList;
}

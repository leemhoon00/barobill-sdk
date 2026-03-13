import { MgtKeyList } from "./MgtKeyList";

/** GetTaxInvoicesPrintURLNK */
export interface GetTaxInvoicesPrintUrlnk {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** NTSConfirmNums */
    NTSConfirmNums?: MgtKeyList;
    /** s:string */
    ID?: string;
}

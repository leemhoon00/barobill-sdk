import { Invoice } from "./Invoice";

/** CheckIsValidCashBill */
export interface CheckIsValidCashBill {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** Invoice */
    Invoice?: Invoice;
}

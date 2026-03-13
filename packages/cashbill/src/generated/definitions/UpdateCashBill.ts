import { Invoice } from "./Invoice";

/** UpdateCashBill */
export interface UpdateCashBill {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    UserID?: string;
    /** Invoice */
    Invoice?: Invoice;
}

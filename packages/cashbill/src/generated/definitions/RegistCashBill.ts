import { Invoice } from "./Invoice";

/** RegistCashBill */
export interface RegistCashBill {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    UserID?: string;
    /** Invoice */
    Invoice?: Invoice;
}

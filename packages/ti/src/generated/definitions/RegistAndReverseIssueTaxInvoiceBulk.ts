import { Invoices } from "./Invoices";

/** RegistAndReverseIssueTaxInvoiceBulk */
export interface RegistAndReverseIssueTaxInvoiceBulk {
    /** s:string */
    CERTKEY?: string;
    /** Invoices */
    Invoices?: Invoices;
    /** s:boolean */
    ForceIssue?: boolean;
}

import { Invoices } from "./Invoices";

/** RegistAndIssueTaxInvoiceBulk */
export interface RegistAndIssueTaxInvoiceBulk {
    /** s:string */
    CERTKEY?: string;
    /** Invoices */
    Invoices?: Invoices;
    /** s:boolean */
    ForceIssue?: boolean;
}

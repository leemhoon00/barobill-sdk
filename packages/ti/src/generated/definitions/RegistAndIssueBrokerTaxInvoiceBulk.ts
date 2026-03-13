import { Invoices } from "./Invoices";

/** RegistAndIssueBrokerTaxInvoiceBulk */
export interface RegistAndIssueBrokerTaxInvoiceBulk {
    /** s:string */
    CERTKEY?: string;
    /** Invoices */
    Invoices?: Invoices;
    /** s:boolean */
    ForceIssue?: boolean;
}

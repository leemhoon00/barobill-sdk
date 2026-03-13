import { Invoices } from "./Invoices";

/** RegistAndPreIssueTaxInvoiceBulk */
export interface RegistAndPreIssueTaxInvoiceBulk {
    /** s:string */
    CERTKEY?: string;
    /** Invoices */
    Invoices?: Invoices;
    /** s:int */
    IssueTiming?: number;
}

import { Invoices } from "./Invoices";

/** RegistAndPreIssueBrokerTaxInvoiceBulk */
export interface RegistAndPreIssueBrokerTaxInvoiceBulk {
    /** s:string */
    CERTKEY?: string;
    /** Invoices */
    Invoices?: Invoices;
    /** s:int */
    IssueTiming?: number;
}

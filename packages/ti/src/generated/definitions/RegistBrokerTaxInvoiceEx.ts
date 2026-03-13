import { Invoice } from "./Invoice";

/** RegistBrokerTaxInvoiceEX */
export interface RegistBrokerTaxInvoiceEx {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** Invoice */
    Invoice?: Invoice;
    /** s:int */
    IssueTiming?: number;
}

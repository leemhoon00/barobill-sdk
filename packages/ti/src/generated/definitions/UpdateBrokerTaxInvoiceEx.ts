import { Invoice } from "./Invoice";

/** UpdateBrokerTaxInvoiceEX */
export interface UpdateBrokerTaxInvoiceEx {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** Invoice */
    Invoice?: Invoice;
    /** s:int */
    IssueTiming?: number;
}

import { Invoice } from "./Invoice";

/** UpdateTaxInvoiceEX */
export interface UpdateTaxInvoiceEx {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** Invoice */
    Invoice?: Invoice;
    /** s:int */
    IssueTiming?: number;
}

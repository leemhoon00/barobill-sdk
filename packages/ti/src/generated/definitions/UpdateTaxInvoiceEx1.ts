import { Invoice } from "./Invoice";

/** UpdateTaxInvoiceEX */
export interface UpdateTaxInvoiceEx1 {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** Invoice */
    Invoice?: Invoice;
    /** s:int */
    IssueTiming?: number;
}

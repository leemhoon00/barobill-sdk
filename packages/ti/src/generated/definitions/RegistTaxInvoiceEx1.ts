import { Invoice } from "./Invoice";

/** RegistTaxInvoiceEX */
export interface RegistTaxInvoiceEx1 {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** Invoice */
    Invoice?: Invoice;
    /** s:int */
    IssueTiming?: number;
}

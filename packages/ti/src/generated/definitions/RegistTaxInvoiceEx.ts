import { Invoice } from "./Invoice";

/** RegistTaxInvoiceEX */
export interface RegistTaxInvoiceEx {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** Invoice */
    Invoice?: Invoice;
    /** s:int */
    IssueTiming?: number;
}

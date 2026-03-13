import { Invoice } from "./Invoice";

/** RegistModifyTaxInvoiceEX */
export interface RegistModifyTaxInvoiceEx1 {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** Invoice */
    Invoice?: Invoice;
    /** s:string */
    OriginalNTSSendKey?: string;
    /** s:int */
    IssueTiming?: number;
}

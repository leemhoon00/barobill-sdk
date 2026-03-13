import { Invoice } from "./Invoice";

/** RegistModifyTaxInvoice */
export interface RegistModifyTaxInvoice {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** Invoice */
    Invoice?: Invoice;
    /** s:string */
    OriginalNTSSendKey?: string;
}

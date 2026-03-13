import { Invoice } from "./Invoice";

/** CheckIsValidTaxInvoice */
export interface CheckIsValidTaxInvoice {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** Invoice */
    Invoice?: Invoice;
}

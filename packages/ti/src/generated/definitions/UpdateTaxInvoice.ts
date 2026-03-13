import { Invoice } from "./Invoice";

/** UpdateTaxInvoice */
export interface UpdateTaxInvoice {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** Invoice */
    Invoice?: Invoice;
}

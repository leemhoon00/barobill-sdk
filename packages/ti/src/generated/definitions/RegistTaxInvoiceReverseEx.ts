import { Invoice } from "./Invoice";

/** RegistTaxInvoiceReverseEX */
export interface RegistTaxInvoiceReverseEx {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** Invoice */
    Invoice?: Invoice;
    /** s:int */
    ChargeDirection?: number;
}

import { Invoice } from "./Invoice";

/** RegistModifyBrokerTaxInvoiceEX */
export interface RegistModifyBrokerTaxInvoiceEx1 {
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

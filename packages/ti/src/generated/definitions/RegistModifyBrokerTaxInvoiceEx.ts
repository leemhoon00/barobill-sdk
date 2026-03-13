import { Invoice } from "./Invoice";

/** RegistModifyBrokerTaxInvoiceEX */
export interface RegistModifyBrokerTaxInvoiceEx {
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

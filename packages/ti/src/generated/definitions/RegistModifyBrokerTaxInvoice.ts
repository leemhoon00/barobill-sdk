import { Invoice } from "./Invoice";

/** RegistModifyBrokerTaxInvoice */
export interface RegistModifyBrokerTaxInvoice {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** Invoice */
    Invoice?: Invoice;
    /** s:string */
    OriginalNTSSendKey?: string;
}

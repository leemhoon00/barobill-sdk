import { Invoice } from "./Invoice";

/** UpdateBrokerTaxInvoice */
export interface UpdateBrokerTaxInvoice {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** Invoice */
    Invoice?: Invoice;
}

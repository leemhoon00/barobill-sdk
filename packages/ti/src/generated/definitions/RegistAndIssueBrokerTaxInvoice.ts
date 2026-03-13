import { Invoice } from "./Invoice";

/** RegistAndIssueBrokerTaxInvoice */
export interface RegistAndIssueBrokerTaxInvoice {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** Invoice */
    Invoice?: Invoice;
    /** s:boolean */
    SendSMS?: boolean;
    /** s:boolean */
    ForceIssue?: boolean;
    /** s:string */
    MailTitle?: string;
}

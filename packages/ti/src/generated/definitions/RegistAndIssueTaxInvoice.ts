import { Invoice } from "./Invoice";

/** RegistAndIssueTaxInvoice */
export interface RegistAndIssueTaxInvoice {
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

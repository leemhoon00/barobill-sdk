import { Invoice } from "./Invoice";

/** RegistAndPreIssueTaxInvoice */
export interface RegistAndPreIssueTaxInvoice {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** Invoice */
    Invoice?: Invoice;
    /** s:boolean */
    SendSMS?: boolean;
    /** s:int */
    IssueTiming?: number;
    /** s:string */
    MailTitle?: string;
}

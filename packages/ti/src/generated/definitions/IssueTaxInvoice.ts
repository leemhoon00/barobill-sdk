
/** IssueTaxInvoice */
export interface IssueTaxInvoice {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    MgtKey?: string;
    /** s:boolean */
    SendSMS?: boolean;
    /** s:int */
    NTSSendOption?: number;
    /** s:boolean */
    ForceIssue?: boolean;
    /** s:string */
    MailTitle?: string;
}

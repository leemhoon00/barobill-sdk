import { Invoice } from "./Invoice";

/** RegistAndIssueEDocWithHtml */
export interface RegistAndIssueEDocWithHtml {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    UserID?: string;
    /** Invoice */
    Invoice?: Invoice;
    /** s:string */
    FormHtml?: string;
    /** s:boolean */
    SMSSendYN?: boolean;
    /** s:string */
    Memo?: string;
    /** s:string */
    MailTitle?: string;
}

import { Invoice } from "./Invoice";

/** RegistAndIssueEDoc */
export interface RegistAndIssueEDoc {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    UserID?: string;
    /** Invoice */
    Invoice?: Invoice;
    /** s:boolean */
    SMSSendYN?: boolean;
    /** s:string */
    Memo?: string;
    /** s:string */
    MailTitle?: string;
}

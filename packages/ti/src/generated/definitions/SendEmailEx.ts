import { MgtKeyList } from "./MgtKeyList";

/** SendEmailEx */
export interface SendEmailEx {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    UserID?: string;
    /** s:string */
    MgtKey?: string;
    /** ToEmails */
    ToEmails?: MgtKeyList;
    /** s:string */
    MailTitle?: string;
}

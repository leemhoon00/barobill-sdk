import { MgtKeyList } from "./MgtKeyList";

/** SendEmailToTruster */
export interface SendEmailToTruster {
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

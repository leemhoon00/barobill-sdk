import { Invoice } from "./Invoice";

/** RegistEDoc */
export interface RegistEDoc {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    UserID?: string;
    /** Invoice */
    Invoice?: Invoice;
}

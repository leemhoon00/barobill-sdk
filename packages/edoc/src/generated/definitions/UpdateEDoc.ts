import { Invoice } from "./Invoice";

/** UpdateEDoc */
export interface UpdateEDoc {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    UserID?: string;
    /** Invoice */
    Invoice?: Invoice;
}

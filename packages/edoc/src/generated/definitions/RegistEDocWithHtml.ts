import { Invoice } from "./Invoice";

/** RegistEDocWithHtml */
export interface RegistEDocWithHtml {
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
}

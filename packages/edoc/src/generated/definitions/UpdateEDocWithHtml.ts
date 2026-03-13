import { Invoice } from "./Invoice";

/** UpdateEDocWithHtml */
export interface UpdateEDocWithHtml {
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

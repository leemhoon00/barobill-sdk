import { Invoice } from "./Invoice";

/** CheckIsValidEDoc */
export interface CheckIsValidEDoc {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** Invoice */
    Invoice?: Invoice;
}

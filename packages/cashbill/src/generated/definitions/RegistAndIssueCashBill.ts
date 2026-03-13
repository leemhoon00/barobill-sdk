import { Invoice1 } from "./Invoice1";

/** RegistAndIssueCashBill */
export interface RegistAndIssueCashBill {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    UserID?: string;
    /** Invoice */
    Invoice?: Invoice1;
    /** s:boolean */
    SMSSendYN?: boolean;
    /** s:string */
    MailTitle?: string;
}

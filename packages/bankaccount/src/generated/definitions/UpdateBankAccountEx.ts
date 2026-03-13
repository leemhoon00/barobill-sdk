import { ForeignCurrencyCodes } from "./ForeignCurrencyCodes";

/** UpdateBankAccountEx */
export interface UpdateBankAccountEx {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    BankAccountNum?: string;
    /** s:string */
    BankAccountPwd?: string;
    /** s:string */
    WebId?: string;
    /** s:string */
    WebPwd?: string;
    /** s:string */
    IdentityNum?: string;
    /** ForeignCurrencyCodes */
    ForeignCurrencyCodes?: ForeignCurrencyCodes;
    /** s:string */
    Alias?: string;
    /** s:string */
    Usage?: string;
}

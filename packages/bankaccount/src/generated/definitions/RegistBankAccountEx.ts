import { ForeignCurrencyCodes } from "./ForeignCurrencyCodes";

/** RegistBankAccountEx */
export interface RegistBankAccountEx {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    CollectCycle?: string;
    /** s:string */
    Bank?: string;
    /** s:string */
    BankAccountType?: string;
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

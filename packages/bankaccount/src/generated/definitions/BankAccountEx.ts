import { ForeignCurrencyCodes } from "./ForeignCurrencyCodes";

/**
 * BankAccountEx
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface BankAccountEx {
    /** s:string */
    CollectCycle?: string;
    /** s:string */
    BankCode?: string;
    /** s:string */
    BankName?: string;
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

import { BankAccountLogList3 } from "./BankAccountLogList3";

/**
 * GetDailyBankAccountTransLogResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetDailyBankAccountTransLogResult {
    /** s:int */
    CurrentPage?: number;
    /** s:int */
    CountPerPage?: number;
    /** s:int */
    MaxIndex?: number;
    /** s:int */
    MaxPageNum?: number;
    /** BankAccountLogList */
    BankAccountLogList?: BankAccountLogList3;
}

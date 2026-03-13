import { BankAccountLogList2 } from "./BankAccountLogList2";

/**
 * GetDailyBankAccountLogEx2Result
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetDailyBankAccountLogEx2Result {
    /** s:int */
    CurrentPage?: number;
    /** s:int */
    CountPerPage?: number;
    /** s:int */
    MaxIndex?: number;
    /** s:int */
    MaxPageNum?: number;
    /** BankAccountLogList */
    BankAccountLogList?: BankAccountLogList2;
}

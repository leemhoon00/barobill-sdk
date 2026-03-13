import { BankAccountLogList } from "./BankAccountLogList";

/**
 * GetBankAccountLogResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetBankAccountLogResult {
    /** s:int */
    CurrentPage?: number;
    /** s:int */
    CountPerPage?: number;
    /** s:int */
    MaxIndex?: number;
    /** s:int */
    MaxPageNum?: number;
    /** BankAccountLogList */
    BankAccountLogList?: BankAccountLogList;
}

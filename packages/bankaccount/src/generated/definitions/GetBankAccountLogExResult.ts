import { BankAccountLogList1 } from "./BankAccountLogList1";

/**
 * GetBankAccountLogExResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetBankAccountLogExResult {
    /** s:int */
    CurrentPage?: number;
    /** s:int */
    CountPerPage?: number;
    /** s:int */
    MaxIndex?: number;
    /** s:int */
    MaxPageNum?: number;
    /** BankAccountLogList */
    BankAccountLogList?: BankAccountLogList1;
}

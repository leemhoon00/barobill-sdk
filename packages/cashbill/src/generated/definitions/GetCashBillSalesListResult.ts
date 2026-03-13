import { SimpleCashBillList } from "./SimpleCashBillList";

/**
 * GetCashBillSalesListResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetCashBillSalesListResult {
    /** s:int */
    CurrentPage?: number;
    /** s:int */
    MaxIndex?: number;
    /** s:int */
    CountPerPage?: number;
    /** s:int */
    MaxPageNum?: number;
    /** SimpleCashBillList */
    SimpleCashBillList?: SimpleCashBillList;
}

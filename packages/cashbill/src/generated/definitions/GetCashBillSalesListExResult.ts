import { SimpleCashBillExList } from "./SimpleCashBillExList";

/**
 * GetCashBillSalesListExResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetCashBillSalesListExResult {
    /** s:int */
    CurrentPage?: number;
    /** s:int */
    MaxIndex?: number;
    /** s:int */
    CountPerPage?: number;
    /** s:int */
    MaxPageNum?: number;
    /** SimpleCashBillExList */
    SimpleCashBillExList?: SimpleCashBillExList;
}

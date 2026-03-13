import { CardLogList1 } from "./CardLogList1";

/**
 * GetCardLogExResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetCardLogExResult {
    /** s:int */
    CurrentPage?: number;
    /** s:int */
    MaxIndex?: number;
    /** s:int */
    CountPerPage?: number;
    /** s:int */
    MaxPageNum?: number;
    /** CardLogList */
    CardLogList?: CardLogList1;
}

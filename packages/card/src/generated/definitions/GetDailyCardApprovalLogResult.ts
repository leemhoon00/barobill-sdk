import { CardLogList4 } from "./CardLogList4";

/**
 * GetDailyCardApprovalLogResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetDailyCardApprovalLogResult {
    /** s:int */
    CurrentPage?: number;
    /** s:int */
    MaxIndex?: number;
    /** s:int */
    CountPerPage?: number;
    /** s:int */
    MaxPageNum?: number;
    /** CardLogList */
    CardLogList?: CardLogList4;
}

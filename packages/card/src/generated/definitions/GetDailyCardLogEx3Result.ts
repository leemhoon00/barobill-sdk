import { CardLogList3 } from "./CardLogList3";

/**
 * GetDailyCardLogEx3Result
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetDailyCardLogEx3Result {
    /** s:int */
    CurrentPage?: number;
    /** s:int */
    MaxIndex?: number;
    /** s:int */
    CountPerPage?: number;
    /** s:int */
    MaxPageNum?: number;
    /** CardLogList */
    CardLogList?: CardLogList3;
}

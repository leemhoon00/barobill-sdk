import { CardLogList2 } from "./CardLogList2";

/**
 * GetDailyCardLogEx2Result
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetDailyCardLogEx2Result {
    /** s:int */
    CurrentPage?: number;
    /** s:int */
    MaxIndex?: number;
    /** s:int */
    CountPerPage?: number;
    /** s:int */
    MaxPageNum?: number;
    /** CardLogList */
    CardLogList?: CardLogList2;
}

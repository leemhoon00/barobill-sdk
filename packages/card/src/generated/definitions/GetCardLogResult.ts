import { CardLogList } from "./CardLogList";

/**
 * GetCardLogResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetCardLogResult {
    /** s:int */
    CurrentPage?: number;
    /** s:int */
    MaxIndex?: number;
    /** s:int */
    CountPerPage?: number;
    /** s:int */
    MaxPageNum?: number;
    /** CardLogList */
    CardLogList?: CardLogList;
}

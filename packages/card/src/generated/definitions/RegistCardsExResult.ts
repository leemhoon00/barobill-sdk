import { CardCheckResults } from "./CardCheckResults";

/**
 * RegistCardsExResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface RegistCardsExResult {
    /** s:int */
    Result?: number;
    /** CardCheckResults */
    CardCheckResults?: CardCheckResults;
}

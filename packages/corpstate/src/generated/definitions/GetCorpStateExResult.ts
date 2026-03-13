
/**
 * GetCorpStateExResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetCorpStateExResult {
    /** s:string */
    CorpNum?: string;
    /** s:int */
    CorpType?: number;
    /** s:int */
    TaxType?: number;
    /** s:string */
    TaxTypeChangeDate?: string;
    /** s:int */
    TaxTypeBefore?: number;
    /** s:string */
    TaxInvoiceApplyDate?: string;
    /** s:int */
    State?: number;
    /** s:string */
    StateDate?: string;
    /** s:string */
    BaseDate?: string;
}


/** GetMonthlyTaxInvoiceSalesList */
export interface GetMonthlyTaxInvoiceSalesList {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    UserID?: string;
    /** s:int */
    TaxType?: number;
    /** s:int */
    DateType?: number;
    /** s:string */
    BaseMonth?: string;
    /** s:int */
    CountPerPage?: number;
    /** s:int */
    CurrentPage?: number;
    /** s:int */
    OrderDirection?: number;
}

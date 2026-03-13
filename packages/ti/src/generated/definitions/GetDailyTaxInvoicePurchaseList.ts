
/** GetDailyTaxInvoicePurchaseList */
export interface GetDailyTaxInvoicePurchaseList {
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
    BaseDate?: string;
    /** s:int */
    CountPerPage?: number;
    /** s:int */
    CurrentPage?: number;
}

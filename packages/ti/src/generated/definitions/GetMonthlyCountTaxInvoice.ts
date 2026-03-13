
/** GetMonthlyCountTaxInvoice */
export interface GetMonthlyCountTaxInvoice {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:int */
    Year?: number;
    /** s:int */
    Month?: number;
    /** s:int */
    PeriodSearchType?: number;
    /** s:boolean */
    hasCanceled?: boolean;
}

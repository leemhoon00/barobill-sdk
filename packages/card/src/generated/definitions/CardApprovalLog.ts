
/**
 * CardApprovalLog
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface CardApprovalLog {
    /** s:string */
    CorpNum?: string;
    /** s:string */
    CardNum?: string;
    /** s:string */
    UseKey?: string;
    /** s:string */
    UseDT?: string;
    /** s:string */
    ApprovalType?: string;
    /** s:string */
    ApprovalNum?: string;
    /** s:string */
    ApprovalAmount?: string;
    /** s:string */
    ForeignApprovalAmount?: string;
    /** s:string */
    Amount?: string;
    /** s:string */
    Tax?: string;
    /** s:string */
    ServiceCharge?: string;
    /** s:string */
    TotalAmount?: string;
    /** s:string */
    UseStoreNum?: string;
    /** s:string */
    UseStoreCorpNum?: string;
    /** s:int */
    UseStoreTaxType?: number;
    /** s:string */
    UseStoreName?: string;
    /** s:string */
    UseStoreCeo?: string;
    /** s:string */
    UseStoreAddr?: string;
    /** s:string */
    UseStoreBizType?: string;
    /** s:string */
    UseStoreTel?: string;
    /** s:string */
    PaymentPlan?: string;
    /** s:string */
    InstallmentMonths?: string;
    /** s:string */
    CurrencyCode?: string;
    /** s:string */
    Memo?: string;
}

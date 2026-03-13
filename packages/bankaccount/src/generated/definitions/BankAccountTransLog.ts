
/**
 * BankAccountTransLog
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface BankAccountTransLog {
    /** s:string */
    CorpNum?: string;
    /** s:string */
    BankAccountNum?: string;
    /** s:string */
    TransRefKey?: string;
    /** s:string */
    TransDirection?: string;
    /** s:string */
    Withdraw?: string;
    /** s:string */
    Deposit?: string;
    /** s:string */
    Balance?: string;
    /** s:string */
    TransDT?: string;
    /** s:string */
    TransType?: string;
    /** s:string */
    TransOffice?: string;
    /** s:string */
    TransRemark1?: string;
    /** s:string */
    TransRemark2?: string;
    /** s:string */
    CurrencyCode?: string;
    /** s:string */
    CmsCode?: string;
    /** s:string */
    Memo?: string;
}

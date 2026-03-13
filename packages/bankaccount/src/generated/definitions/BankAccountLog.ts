
/**
 * BankAccountLog
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface BankAccountLog {
    /** s:string */
    CorpNum?: string;
    /** s:string */
    BankAccountNum?: string;
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
    TransRemark?: string;
    /** s:string */
    MgtRemark1?: string;
    /** s:string */
    MgtRemark2?: string;
}

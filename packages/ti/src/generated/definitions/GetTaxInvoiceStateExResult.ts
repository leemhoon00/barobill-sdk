
/**
 * GetTaxInvoiceStateEXResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetTaxInvoiceStateExResult {
    /** s:string */
    MgtKey?: string;
    /** s:string */
    InvoiceKey?: string;
    /** s:int */
    BarobillState?: number;
    /** s:int */
    IsOpened?: number;
    /** s:int */
    IsConfirmed?: number;
    /** s:string */
    RegistDT?: string;
    /** s:string */
    WriteDate?: string;
    /** s:string */
    PreIssueDT?: string;
    /** s:string */
    IssueDT?: string;
    /** s:string */
    Remark1?: string;
    /** s:string */
    Remark2?: string;
    /** s:int */
    NTSSendState?: number;
    /** s:string */
    NTSSendKey?: string;
    /** s:string */
    NTSSendResult?: string;
    /** s:string */
    NTSSendDT?: string;
    /** s:string */
    NTSResultDT?: string;
}

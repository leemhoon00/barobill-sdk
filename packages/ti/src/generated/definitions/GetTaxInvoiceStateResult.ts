
/**
 * GetTaxInvoiceStateResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetTaxInvoiceStateResult {
    /** s:string */
    MgtKey?: string;
    /** s:string */
    Remark1?: string;
    /** s:string */
    Remark2?: string;
    /** s:int */
    BarobillState?: number;
    /** s:string */
    InvoiceKey?: string;
    /** s:int */
    IsOpened?: number;
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

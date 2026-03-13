
/**
 * GetCashBillStateResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetCashBillStateResult {
    /** s:string */
    MgtKey?: string;
    /** s:string */
    InvoiceKey?: string;
    /** s:int */
    BarobillState?: number;
    /** s:string */
    TradeDate?: string;
    /** s:string */
    RegistDT?: string;
    /** s:string */
    IssueDT?: string;
    /** s:string */
    NTSSendDT?: string;
    /** s:string */
    NTSConfirmDT?: string;
    /** s:string */
    NTSConfirmMessage?: string;
    /** s:string */
    NTSConfirmNum?: string;
}

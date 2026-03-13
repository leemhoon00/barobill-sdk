
/**
 * GetEDocStateResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetEDocStateResult {
    /** s:string */
    MgtKey?: string;
    /** s:string */
    InvoiceKey?: string;
    /** s:int */
    BarobillState?: number;
    /** s:boolean */
    OpenYN?: boolean;
    /** s:string */
    Remark1?: string;
    /** s:string */
    Remark2?: string;
}

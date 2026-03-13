
/**
 * InvoiceLog
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface InvoiceLog {
    /** s:int */
    Seq?: number;
    /** s:string */
    LogType?: string;
    /** s:string */
    ProcCorpName?: string;
    /** s:string */
    ProcContactName?: string;
    /** s:string */
    LogDateTime?: string;
    /** s:string */
    Memo?: string;
}

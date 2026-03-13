
/**
 * SimpleTaxInvoice
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface SimpleTaxInvoice {
    /** s:string */
    NTSSendKey?: string;
    /** s:string */
    WriteDate?: string;
    /** s:int */
    TaxType?: number;
    /** s:string */
    ModifyCode?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    TaxRegID?: string;
    /** s:string */
    CorpName?: string;
    /** s:string */
    CEOName?: string;
    /** s:string */
    AmountTotal?: string;
    /** s:string */
    TaxTotal?: string;
    /** s:string */
    TotalAmount?: string;
}

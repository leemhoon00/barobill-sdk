import { SimpleTaxInvoiceList } from "./SimpleTaxInvoiceList";

/**
 * GetTaxInvoiceSalesListResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetTaxInvoiceSalesListResult {
    /** s:int */
    CurrentPage?: number;
    /** s:int */
    MaxIndex?: number;
    /** s:int */
    CountPerPage?: number;
    /** s:int */
    MaxPageNum?: number;
    /** SimpleTaxInvoiceList */
    SimpleTaxInvoiceList?: SimpleTaxInvoiceList;
}

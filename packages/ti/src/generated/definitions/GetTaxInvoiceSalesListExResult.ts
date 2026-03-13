import { SimpleTaxInvoiceExList } from "./SimpleTaxInvoiceExList";

/**
 * GetTaxInvoiceSalesListExResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetTaxInvoiceSalesListExResult {
    /** s:int */
    CurrentPage?: number;
    /** s:int */
    MaxIndex?: number;
    /** s:int */
    CountPerPage?: number;
    /** s:int */
    MaxPageNum?: number;
    /** SimpleTaxInvoiceExList */
    SimpleTaxInvoiceExList?: SimpleTaxInvoiceExList;
}

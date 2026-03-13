import { InvoicerParty } from "./InvoicerParty";
import { TaxInvoiceTradeLineItems } from "./TaxInvoiceTradeLineItems";

/**
 * Invoice
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface Invoice {
    /** s:string */
    InvoiceKey?: string;
    /** InvoicerParty */
    InvoicerParty?: InvoicerParty;
    /** InvoiceeParty */
    InvoiceeParty?: InvoicerParty;
    /** BrokerParty */
    BrokerParty?: InvoicerParty;
    /** s:string */
    InvoiceeASPEmail?: string;
    /** s:int */
    IssueDirection?: number;
    /** s:int */
    TaxInvoiceType?: number;
    /** s:int */
    TaxType?: number;
    /** s:int */
    TaxCalcType?: number;
    /** s:int */
    PurposeType?: number;
    /** s:string */
    ModifyCode?: string;
    /** s:string */
    Kwon?: string;
    /** s:string */
    Ho?: string;
    /** s:string */
    SerialNum?: string;
    /** s:string */
    Cash?: string;
    /** s:string */
    ChkBill?: string;
    /** s:string */
    Note?: string;
    /** s:string */
    Credit?: string;
    /** s:string */
    WriteDate?: string;
    /** s:string */
    AmountTotal?: string;
    /** s:string */
    TaxTotal?: string;
    /** s:string */
    TotalAmount?: string;
    /** s:string */
    Remark1?: string;
    /** s:string */
    Remark2?: string;
    /** s:string */
    Remark3?: string;
    /** TaxInvoiceTradeLineItems */
    TaxInvoiceTradeLineItems?: TaxInvoiceTradeLineItems;
}

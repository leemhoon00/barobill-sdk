import { InvoicerParty } from "./InvoicerParty";
import { EDocProperties } from "./EDocProperties";
import { EDocTradeLineItems } from "./EDocTradeLineItems";

/**
 * Invoice
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface Invoice {
    /** s:string */
    InvoiceKey?: string;
    /** s:string */
    InvoiceNum?: string;
    /** s:string */
    MgtKey?: string;
    /** s:string */
    FormKey?: string;
    /** s:string */
    UserID?: string;
    /** InvoicerParty */
    InvoicerParty?: InvoicerParty;
    /** InvoiceeParty */
    InvoiceeParty?: InvoicerParty;
    /** s:int */
    EDocInvoiceType?: number;
    /** s:boolean */
    CertYN?: boolean;
    /** s:boolean */
    AutoAcceptYN?: boolean;
    /** s:boolean */
    BusinessLicenseYN?: boolean;
    /** s:boolean */
    BankBookYN?: boolean;
    /** s:string */
    WriteDate?: string;
    /** s:int */
    TaxType?: number;
    /** s:int */
    PurposeType?: number;
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
    /** s:string */
    SerialNum?: string;
    /** EDocProperties */
    EDocProperties?: EDocProperties;
    /** EDocTradeLineItems */
    EDocTradeLineItems?: EDocTradeLineItems;
}


/**
 * SimpleCashBill
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface SimpleCashBill {
    /** s:string */
    NTSConfirmNum?: string;
    /** s:string */
    TradeDate?: string;
    /** s:string */
    TradeType?: string;
    /** s:string */
    FranchiseCorpNum?: string;
    /** s:string */
    FranchiseCorpName?: string;
    /** s:string */
    IdentityNum?: string;
    /** s:string */
    Amount?: string;
    /** s:string */
    Tax?: string;
    /** s:string */
    ServiceCharge?: string;
}

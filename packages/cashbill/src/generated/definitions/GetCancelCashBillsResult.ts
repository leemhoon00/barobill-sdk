import { Invoice1 } from "./Invoice1";

/**
 * GetCancelCashBillsResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetCancelCashBillsResult {
    /** CashBillEx[] */
    CashBillEx?: Array<Invoice1>;
}

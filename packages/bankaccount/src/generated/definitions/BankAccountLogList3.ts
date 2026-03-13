import { BankAccountTransLog } from "./BankAccountTransLog";

/**
 * BankAccountLogList
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface BankAccountLogList3 {
    /** BankAccountTransLog[] */
    BankAccountTransLog?: Array<BankAccountTransLog>;
}

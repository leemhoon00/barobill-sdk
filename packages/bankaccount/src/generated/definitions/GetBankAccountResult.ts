import { BankAccount } from "./BankAccount";

/**
 * GetBankAccountResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetBankAccountResult {
    /** BankAccount[] */
    BankAccount?: Array<BankAccount>;
}

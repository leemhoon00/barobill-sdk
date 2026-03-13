import { BankAccountCheckResults } from "./BankAccountCheckResults";

/**
 * RegistBankAccountsExResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface RegistBankAccountsExResult {
    /** s:int */
    Result?: number;
    /** BankAccountCheckResults */
    BankAccountCheckResults?: BankAccountCheckResults;
}

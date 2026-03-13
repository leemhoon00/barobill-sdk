import { BaroServiceBankaccountSoap } from "../ports/BaroServiceBankaccountSoap";
import { BaroServiceBankaccountSoap12 } from "../ports/BaroServiceBankaccountSoap12";

export interface BaroServiceBankaccount {
    readonly BaroServiceBankaccountSoap: BaroServiceBankaccountSoap;
    readonly BaroServiceBankaccountSoap12: BaroServiceBankaccountSoap12;
}

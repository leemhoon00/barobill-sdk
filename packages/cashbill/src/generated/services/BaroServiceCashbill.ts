import { BaroServiceCashbillSoap } from "../ports/BaroServiceCashbillSoap";
import { BaroServiceCashbillSoap12 } from "../ports/BaroServiceCashbillSoap12";

export interface BaroServiceCashbill {
    readonly BaroServiceCashbillSoap: BaroServiceCashbillSoap;
    readonly BaroServiceCashbillSoap12: BaroServiceCashbillSoap12;
}

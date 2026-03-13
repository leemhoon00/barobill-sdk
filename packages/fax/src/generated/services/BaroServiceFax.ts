import { BaroServiceFaxSoap } from "../ports/BaroServiceFaxSoap";
import { BaroServiceFaxSoap12 } from "../ports/BaroServiceFaxSoap12";

export interface BaroServiceFax {
    readonly BaroServiceFaxSoap: BaroServiceFaxSoap;
    readonly BaroServiceFaxSoap12: BaroServiceFaxSoap12;
}

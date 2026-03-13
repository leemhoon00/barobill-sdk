import { BaroServiceEdocSoap } from "../ports/BaroServiceEdocSoap";
import { BaroServiceEdocSoap12 } from "../ports/BaroServiceEdocSoap12";

export interface BaroServiceEdoc {
    readonly BaroServiceEdocSoap: BaroServiceEdocSoap;
    readonly BaroServiceEdocSoap12: BaroServiceEdocSoap12;
}

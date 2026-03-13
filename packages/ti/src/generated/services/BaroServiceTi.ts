import { BaroServiceTiSoap } from "../ports/BaroServiceTiSoap";
import { BaroServiceTiSoap12 } from "../ports/BaroServiceTiSoap12";

export interface BaroServiceTi {
    readonly BaroServiceTiSoap: BaroServiceTiSoap;
    readonly BaroServiceTiSoap12: BaroServiceTiSoap12;
}

import { BaroServiceCardSoap } from "../ports/BaroServiceCardSoap";
import { BaroServiceCardSoap12 } from "../ports/BaroServiceCardSoap12";

export interface BaroServiceCard {
    readonly BaroServiceCardSoap: BaroServiceCardSoap;
    readonly BaroServiceCardSoap12: BaroServiceCardSoap12;
}

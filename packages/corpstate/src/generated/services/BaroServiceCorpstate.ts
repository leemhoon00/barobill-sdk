import { BaroServiceCorpstateSoap } from "../ports/BaroServiceCorpstateSoap";
import { BaroServiceCorpstateSoap12 } from "../ports/BaroServiceCorpstateSoap12";

export interface BaroServiceCorpstate {
    readonly BaroServiceCorpstateSoap: BaroServiceCorpstateSoap;
    readonly BaroServiceCorpstateSoap12: BaroServiceCorpstateSoap12;
}

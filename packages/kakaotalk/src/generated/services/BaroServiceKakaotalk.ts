import { BaroServiceKakaotalkSoap } from "../ports/BaroServiceKakaotalkSoap";
import { BaroServiceKakaotalkSoap12 } from "../ports/BaroServiceKakaotalkSoap12";

export interface BaroServiceKakaotalk {
    readonly BaroServiceKakaotalkSoap: BaroServiceKakaotalkSoap;
    readonly BaroServiceKakaotalkSoap12: BaroServiceKakaotalkSoap12;
}

import { BaroServiceSmsSoap } from "../ports/BaroServiceSmsSoap";
import { BaroServiceSmsSoap12 } from "../ports/BaroServiceSmsSoap12";

export interface BaroServiceSms {
    readonly BaroServiceSmsSoap: BaroServiceSmsSoap;
    readonly BaroServiceSmsSoap12: BaroServiceSmsSoap12;
}

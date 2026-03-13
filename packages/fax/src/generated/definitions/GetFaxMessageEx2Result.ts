import { SendFaxesFromFtpResult } from "./SendFaxesFromFtpResult";

/**
 * GetFaxMessageEx2Result
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetFaxMessageEx2Result {
    /** s:string */
    SendKey?: string;
    /** s:string */
    ID?: string;
    /** s:string */
    SendFileName?: string;
    /** s:int */
    SendPageCount?: number;
    /** s:int */
    SuccessPageCount?: number;
    /** s:string */
    SendResult?: string;
    /** s:string */
    SenderNum?: string;
    /** s:string */
    ReceiveCorp?: string;
    /** s:string */
    ReceiverName?: string;
    /** s:string */
    ReceiverNum?: string;
    /** s:int */
    ReserveYN?: number;
    /** s:string */
    ReserveDT?: string;
    /** s:string */
    SendDT?: string;
    /** s:string */
    EndDT?: string;
    /** s:string */
    RefKey?: string;
    /** s:int */
    SendState?: number;
    /** fileURLs */
    fileURLs?: SendFaxesFromFtpResult;
}

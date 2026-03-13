import { SendFaxesFromFtpResult } from "./SendFaxesFromFtpResult";

/**
 * GetFaxMessageExResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetFaxMessageExResult {
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
    /** s:string */
    SendDT?: string;
    /** s:string */
    RefKey?: string;
    /** s:int */
    SendState?: number;
    /** fileURLs */
    fileURLs?: SendFaxesFromFtpResult;
}

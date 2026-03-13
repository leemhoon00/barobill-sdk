import { Buttons } from "./Buttons";

/**
 * KakaotalkMessage
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface KakaotalkMessage1 {
    /** s:string */
    ReceiverName?: string;
    /** s:string */
    ReceiverNum?: string;
    /** s:string */
    Title?: string;
    /** s:string */
    Message?: string;
    /** s:string */
    SmsMessage?: string;
    /** s:string */
    SmsSubject?: string;
    /** Buttons */
    Buttons?: Buttons;
}

import { Image } from "./Image";
import { Buttons } from "./Buttons";

/**
 * GetSendKakaotalkResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface GetSendKakaotalkResult {
    /** s:string */
    ChannelId?: string;
    /** s:string */
    TemplateName?: string;
    /** s:int */
    MessageType?: number;
    /** s:string */
    SendKey?: string;
    /** s:string */
    ReceiverNum?: string;
    /** s:string */
    ReceiverName?: string;
    /** s:string */
    SendDT?: string;
    /** s:boolean */
    ReserveYN?: boolean;
    /** s:int */
    SendStatus?: number;
    /** s:int */
    ResultCode?: number;
    /** s:string */
    ResultMessage?: string;
    /** s:string */
    Message?: string;
    /** s:string */
    Title?: string;
    /** s:boolean */
    AdYN?: boolean;
    /** Image */
    Image?: Image;
    /** Buttons */
    Buttons?: Buttons;
    /** s:string */
    SmsMessage?: string;
    /** s:string */
    SmsSubject?: string;
    /** s:string */
    SenderNum?: string;
}

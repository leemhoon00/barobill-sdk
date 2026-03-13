import { KakaotalkMessage2 } from "./KakaotalkMessage2";

/** SendFWKakaotalk */
export interface SendFwKakaotalk {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    SenderID?: string;
    /** s:string */
    ChannelId?: string;
    /** s:string */
    SendDT?: string;
    /** s:boolean */
    AdYN?: boolean;
    /** s:string */
    ImageName?: string;
    /** s:string */
    ImageLink?: string;
    /** s:string */
    SmsReply?: string;
    /** s:string */
    SmsSenderNum?: string;
    /** KakaotalkMessage */
    KakaotalkMessage?: KakaotalkMessage2;
}

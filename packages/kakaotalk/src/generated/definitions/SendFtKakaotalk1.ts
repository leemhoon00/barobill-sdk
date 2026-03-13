import { KakaotalkMessage2 } from "./KakaotalkMessage2";

/** SendFTKakaotalk */
export interface SendFtKakaotalk1 {
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
    SmsReply?: string;
    /** s:string */
    SmsSenderNum?: string;
    /** KakaotalkMessage */
    KakaotalkMessage?: KakaotalkMessage2;
}

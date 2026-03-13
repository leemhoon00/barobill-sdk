import { KakaotalkMessages2 } from "./KakaotalkMessages2";

/** SendFTKakaotalks */
export interface SendFtKakaotalks {
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
    /** KakaotalkMessages */
    KakaotalkMessages?: KakaotalkMessages2;
}

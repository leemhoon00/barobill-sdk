import { KakaotalkMessages } from "./KakaotalkMessages";

/** SendATKakaotalks */
export interface SendAtKakaotalks1 {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    SenderID?: string;
    /** s:string */
    TemplateName?: string;
    /** s:string */
    SendDT?: string;
    /** s:string */
    SmsReply?: string;
    /** s:string */
    SmsSenderNum?: string;
    /** KakaotalkMessages */
    KakaotalkMessages?: KakaotalkMessages;
}

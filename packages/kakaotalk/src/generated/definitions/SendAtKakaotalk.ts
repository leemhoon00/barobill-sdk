import { KakaotalkMessage } from "./KakaotalkMessage";

/** SendATKakaotalk */
export interface SendAtKakaotalk {
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
    /** KakaotalkMessage */
    KakaotalkMessage?: KakaotalkMessage;
}

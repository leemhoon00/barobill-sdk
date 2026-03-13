import { KakaotalkMessages1 } from "./KakaotalkMessages1";

/** SendATKakaotalksEx */
export interface SendAtKakaotalksEx1 {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    SenderID?: string;
    /** s:string */
    YellowId?: string;
    /** s:string */
    TemplateName?: string;
    /** s:string */
    SendDT?: string;
    /** s:string */
    SmsReply?: string;
    /** s:string */
    SmsSenderNum?: string;
    /** KakaotalkMessages */
    KakaotalkMessages?: KakaotalkMessages1;
}

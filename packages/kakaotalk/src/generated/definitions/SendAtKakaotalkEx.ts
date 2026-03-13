import { KakaotalkMessage1 } from "./KakaotalkMessage1";

/** SendATKakaotalkEx */
export interface SendAtKakaotalkEx {
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
    /** KakaotalkMessage */
    KakaotalkMessage?: KakaotalkMessage1;
}

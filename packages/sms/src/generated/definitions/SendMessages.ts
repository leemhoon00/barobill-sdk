import { Messages } from "./Messages";

/** SendMessages */
export interface SendMessages {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    SenderID?: string;
    /** s:int */
    SendCount?: number;
    /** s:boolean */
    CutToSMS?: boolean;
    /** Messages */
    Messages?: Messages;
    /** s:string */
    SendDT?: string;
}

import { Image } from "./Image";
import { Buttons } from "./Buttons";

/**
 * KakaotalkTemplate
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface KakaotalkTemplate {
    /** s:string */
    ChannelId?: string;
    /** s:string */
    TemplateName?: string;
    /** s:int */
    TemplateMessageType?: number;
    /** s:int */
    TemplateEmphasizeType?: number;
    /** s:string */
    TemplateContent?: string;
    /** s:string */
    TemplateExtra?: string;
    /** s:string */
    TemplateTitle?: string;
    /** s:string */
    TemplateSubtitle?: string;
    /** s:int */
    Status?: number;
    /** s:boolean */
    SecurityFlag?: boolean;
    /** Image */
    Image?: Image;
    /** Buttons */
    Buttons?: Buttons;
}

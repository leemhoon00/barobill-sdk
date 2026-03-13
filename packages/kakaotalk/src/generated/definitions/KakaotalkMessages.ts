import { KakaotalkMessage } from "./KakaotalkMessage";

/**
 * KakaotalkMessages
 * @targetNSAlias `tns`
 * @targetNamespace `http://ws.baroservice.com/`
 */
export interface KakaotalkMessages {
    /** KakaotalkATMessage[] */
    KakaotalkATMessage?: Array<KakaotalkMessage>;
}

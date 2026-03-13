import { MgtKeyList } from "./MgtKeyList";

/** AttachFilesByFTP */
export interface AttachFilesByFtp1 {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    MgtKey?: string;
    /** FileNames */
    FileNames?: MgtKeyList;
    /** DisplayFileNames */
    DisplayFileNames?: MgtKeyList;
}

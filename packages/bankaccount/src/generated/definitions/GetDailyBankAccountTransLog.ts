
/** GetDailyBankAccountTransLog */
export interface GetDailyBankAccountTransLog {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    ID?: string;
    /** s:string */
    BankAccountNum?: string;
    /** s:string */
    BaseDate?: string;
    /** s:int */
    TransDirection?: number;
    /** s:int */
    CountPerPage?: number;
    /** s:int */
    CurrentPage?: number;
    /** s:int */
    OrderDirection?: number;
}

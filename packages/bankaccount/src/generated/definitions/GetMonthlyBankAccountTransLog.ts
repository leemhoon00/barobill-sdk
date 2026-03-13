
/** GetMonthlyBankAccountTransLog */
export interface GetMonthlyBankAccountTransLog {
    /** s:string */
    CERTKEY?: string;
    /** s:string */
    CorpNum?: string;
    /** s:string */
    ID?: string;
    /** s:string */
    BankAccountNum?: string;
    /** s:string */
    BaseMonth?: string;
    /** s:int */
    TransDirection?: number;
    /** s:int */
    CountPerPage?: number;
    /** s:int */
    CurrentPage?: number;
    /** s:int */
    OrderDirection?: number;
}

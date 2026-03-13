export interface BarobillConfig {
  certKey: string;
  /** 기본 사업자등록번호. 매 호출 시 CorpNum을 전달하면 해당 값이 우선 사용됩니다. */
  corpNum: string;
  /** 테스트 환경 사용 여부 (testws.baroservice.com). 기본값: false */
  test?: boolean;
}

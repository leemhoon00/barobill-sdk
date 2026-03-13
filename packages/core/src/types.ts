export interface BarobillConfig {
  certKey: string;
  /** 기본 사업자등록번호. 생략 시 매 호출마다 CorpNum을 전달해야 합니다. */
  corpNum?: string;
  /** 테스트 환경 사용 여부 (testws.baroservice.com). 기본값: false */
  test?: boolean;
}

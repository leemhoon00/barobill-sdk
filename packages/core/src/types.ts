export interface BarobillConfig {
  certKey: string;
  corpNum: string;
  /** 테스트 환경 사용 여부 (testws.baroservice.com). 기본값: false */
  test?: boolean;
}

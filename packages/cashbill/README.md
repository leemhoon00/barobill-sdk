# @barobill-sdk/cashbill

바로빌 현금영수증 API TypeScript SDK (비공식)

> **이 패키지는 바로빌의 공식 SDK가 아닌, 비공식 SDK입니다.**
> 바로빌 API의 공식 문서는 [바로빌 API 레퍼런스](https://dev.barobill.co.kr/docs/references/%EB%B0%94%EB%A1%9C%EB%B9%8C-API-%EB%A0%88%ED%8D%BC%EB%9F%B0%EC%8A%A4-%EA%B0%9C%EC%9A%94)를 참고해 주세요.

## 설치

```bash
npm i @barobill-sdk/cashbill
```

## 사용법

```typescript
import { CashbillClient } from '@barobill-sdk/cashbill';

const client = await CashbillClient.create({
  certKey: 'your-cert-key',
  corpNum: '1234567890', // 기본 사업자등록번호 (선택)
  test: true,            // true: 테스트 환경 (기본값: false)
});

const result = await client.registAndIssueCashBill({
  CorpNum: '1234567890',
  // ...
});
```

- `certKey`: 바로빌 인증키
- `corpNum` (선택): 기본 사업자등록번호. 설정하면 API 호출 시 자동 주입됩니다.
- `test`: `true`이면 테스트 환경, `false`이면 운영 환경

## 주요 메서드

| 분류 | 메서드 |
|------|--------|
| 등록/발행 | `registCashBill`, `issueCashBill`, `registAndIssueCashBill` 등 |
| 수정/삭제 | `updateCashBill`, `deleteCashBill` |
| 취소 | `cancelCashBill`, `cancelCashBillPartial`, `cancelCashBillBeforeNtsSend` 등 |
| 조회 | `getCashBill`, `getCashBillState`, `getCashBillStates`, `getCashBillLog` 등 |
| 홈택스 매입매출 | `getCashBillSalesList`, `getCashBillPurchaseList`, `getDailyCashBillSalesList`, `getMonthlyCashBillSalesList` 등 |
| 전송 | `sendEmail`, `sendSMS`, `sendFax` 등 |
| URL | `getCashBillPrintURL`, `getCashBillMailURL`, `getBaroBillURL` |
| 유틸 | `getErrString`, `ping` |

## 관련 링크

- [전체 패키지 목록 (모노레포)](https://github.com/jonghun-park/barobill-sdk)

## License

ISC

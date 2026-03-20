# @barobill-sdk/bankaccount

바로빌 계좌조회 API TypeScript SDK (비공식)

> **이 패키지는 바로빌의 공식 SDK가 아닌, 비공식 SDK입니다.**
> 바로빌 API의 공식 문서는 [바로빌 API 레퍼런스](https://dev.barobill.co.kr/docs/references/%EB%B0%94%EB%A1%9C%EB%B9%8C-API-%EB%A0%88%ED%8D%BC%EB%9F%B0%EC%8A%A4-%EA%B0%9C%EC%9A%94)를 참고해 주세요.

## 설치

```bash
npm i @barobill-sdk/bankaccount
```

## 사용법

```typescript
import { BankAccountClient } from '@barobill-sdk/bankaccount';

const client = await BankAccountClient.create({
  certKey: 'your-cert-key',
  corpNum: '1234567890', // 기본 사업자등록번호 (선택)
  test: true,            // true: 테스트 환경 (기본값: false)
});

const result = await client.getDailyBankAccountLog({
  // ...
});
```

- `certKey`: 바로빌 인증키
- `corpNum` (선택): 기본 사업자등록번호. 설정하면 API 호출 시 자동 주입됩니다.
- `test`: `true`이면 테스트 환경, `false`이면 운영 환경

## 주요 메서드

| 분류 | 메서드 |
|------|--------|
| 계좌 등록/관리 | `registBankAccount`, `registBankAccountEx`, `updateBankAccount`, `stopBankAccount`, `cancelStopBankAccount`, `reRegistBankAccount` |
| 계좌 조회 | `getBankAccount`, `getBankAccountEx`, `getBankAccountEx2`, `refreshBankAccount` |
| 일별 조회 | `getDailyBankAccountLog`, `getDailyBankAccountLogEx`, `getDailyBankAccountTransLog` 등 |
| 월별 조회 | `getMonthlyBankAccountLog`, `getMonthlyBankAccountLogEx`, `getMonthlyBankAccountTransLog` 등 |
| 기간별 조회 | `getPeriodBankAccountLog`, `getPeriodBankAccountLogEx`, `getPeriodBankAccountTransLog` 등 |
| URL | `getBankAccountScrapRequestURL`, `getBankAccountManagementURL`, `getBankAccountLogURL` |
| 유틸 | `getErrString`, `ping` |

## 관련 링크

- [전체 패키지 목록 (모노레포)](https://github.com/jonghun-park/barobill-sdk)

## License

ISC

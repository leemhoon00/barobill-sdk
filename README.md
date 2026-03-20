# @barobill-sdk

바로빌 API TypeScript SDK (비공식)

> **이 패키지는 바로빌의 공식 SDK가 아닌, 비공식 SDK입니다.**
> 바로빌 API의 공식 문서는 [바로빌 API 레퍼런스](https://dev.barobill.co.kr/docs/references/%EB%B0%94%EB%A1%9C%EB%B9%8C-API-%EB%A0%88%ED%8D%BC%EB%9F%B0%EC%8A%A4-%EA%B0%9C%EC%9A%94)를 참고해 주세요.

## 패키지 목록

| 패키지                      | 설명                                      | 설치                              |
| --------------------------- | ----------------------------------------- | --------------------------------- |
| `@barobill-sdk/ti`          | 전자세금계산서 (홈택스 매입매출조회 포함) | `npm i @barobill-sdk/ti`          |
| `@barobill-sdk/cashbill`    | 현금영수증 (홈택스 매입매출조회 포함)     | `npm i @barobill-sdk/cashbill`    |
| `@barobill-sdk/edoc`        | 전자문서                                  | `npm i @barobill-sdk/edoc`        |
| `@barobill-sdk/card`        | 카드조회                                  | `npm i @barobill-sdk/card`        |
| `@barobill-sdk/bankaccount` | 계좌조회                                  | `npm i @barobill-sdk/bankaccount` |
| `@barobill-sdk/corpstate`   | 사업자등록 상태조회                       | `npm i @barobill-sdk/corpstate`   |
| `@barobill-sdk/sms`         | 문자전송                                  | `npm i @barobill-sdk/sms`         |
| `@barobill-sdk/fax`         | 팩스전송                                  | `npm i @barobill-sdk/fax`         |
| `@barobill-sdk/kakaotalk`   | 카카오톡전송                              | `npm i @barobill-sdk/kakaotalk`   |

## 사용법

### 클라이언트 초기화

```typescript
import { SmsClient } from '@barobill-sdk/sms';

// 기본 사업자번호를 설정하는 경우
const client = await SmsClient.create({
  certKey: 'your-cert-key',
  corpNum: '1234567890', // 기본 사업자등록번호 (선택)
  test: true, // true: 테스트 환경, false: 운영 환경 (기본값: false)
});

// certKey만으로 초기화 (사업자번호를 매 호출 시 전달)
const client2 = await SmsClient.create({
  certKey: 'your-cert-key',
});
```

- `certKey`: 바로빌 인증키
- `corpNum` (선택): 기본 사업자등록번호. 설정하면 모든 API 호출에 자동 주입됩니다.
- `test`: `true`이면 `testws.baroservice.com`, `false`이면 `ws.baroservice.com` 사용

### API 호출

```typescript
// 기본 사업자번호 사용
const result = await client.sendSMSMessage({
  FromNumber: '01012345678',
  ToNumber: '01098765432',
  Contents: '안녕하세요',
});

// 다른 사업자번호로 호출 (기본값 덮어쓰기)
const result2 = await client.sendSMSMessage({
  CorpNum: '9876543210',
  FromNumber: '01012345678',
  ToNumber: '01098765432',
  Contents: '안녕하세요',
});
```

`CERTKEY`는 항상 자동 주입됩니다. `CorpNum`은 초기화 시 설정한 기본값이 사용되며, 호출 시 전달하면 해당 값이 우선 사용됩니다.

### 전자세금계산서 예시

```typescript
import { TiClient } from '@barobill-sdk/ti';

const client = await TiClient.create({
  certKey: 'your-cert-key',
  corpNum: '1234567890',
});

const result = await client.registAndIssueTaxInvoice({
  Invoice: {
    InvoicerParty: {
      MgtNum: '20240101-001',
      CorpNum: '1234567890',
      CorpName: '테스트회사',
      // ...
    },
    InvoiceeParty: {
      CorpNum: '0987654321',
      CorpName: '거래처',
      // ...
    },
    // ...
  },
});
```

### 현금영수증 예시

```typescript
import { CashbillClient } from '@barobill-sdk/cashbill';

const client = await CashbillClient.create({
  certKey: 'your-cert-key',
  test: true,
});

const result = await client.registCashbill({
  CorpNum: '1234567890',
  // ...
});
```

## 클라이언트 목록

| 패키지                      | 클라이언트 클래스   |
| --------------------------- | ------------------- |
| `@barobill-sdk/ti`          | `TiClient`          |
| `@barobill-sdk/cashbill`    | `CashbillClient`    |
| `@barobill-sdk/edoc`        | `EdocClient`        |
| `@barobill-sdk/card`        | `CardClient`        |
| `@barobill-sdk/bankaccount` | `BankAccountClient` |
| `@barobill-sdk/corpstate`   | `CorpStateClient`   |
| `@barobill-sdk/sms`         | `SmsClient`         |
| `@barobill-sdk/fax`         | `FaxClient`         |
| `@barobill-sdk/kakaotalk`   | `KakaoTalkClient`   |

## API 엔드포인트

| 환경   | URL                                                  |
| ------ | ---------------------------------------------------- |
| 테스트 | `https://testws.baroservice.com/{SERVICE}.asmx?wsdl` |
| 운영   | `https://ws.baroservice.com/{SERVICE}.asmx?wsdl`     |

## Contributing (SDK 개발자용)

이 SDK 자체를 수정하거나 바로빌 API 변경에 대응할 때 사용합니다.

```bash
# 의존성 설치
pnpm install

# 전체 빌드
pnpm build

# WSDL에서 타입 재생성 (바로빌 API 변경 시)
pnpm generate:types

# wrapper 클라이언트 재생성
pnpm generate:wrapper
```

## License

ISC

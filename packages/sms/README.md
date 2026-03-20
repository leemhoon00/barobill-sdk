# @barobill-sdk/sms

바로빌 문자전송 API TypeScript SDK (비공식)

> **이 패키지는 바로빌의 공식 SDK가 아닌, 비공식 SDK입니다.**
> 바로빌 API의 공식 문서는 [바로빌 API 레퍼런스](https://dev.barobill.co.kr/docs/references/%EB%B0%94%EB%A1%9C%EB%B9%8C-API-%EB%A0%88%ED%8D%BC%EB%9F%B0%EC%8A%A4-%EA%B0%9C%EC%9A%94)를 참고해 주세요.

## 설치

```bash
npm i @barobill-sdk/sms
```

## 사용법

```typescript
import { SmsClient } from '@barobill-sdk/sms';

const client = await SmsClient.create({
  certKey: 'your-cert-key',
  corpNum: '1234567890', // 기본 사업자등록번호 (선택)
  test: true,            // true: 테스트 환경 (기본값: false)
});

const result = await client.sendSMSMessage({
  FromNumber: '01012345678',
  ToNumber: '01098765432',
  Contents: '안녕하세요',
});
```

- `certKey`: 바로빌 인증키
- `corpNum` (선택): 기본 사업자등록번호. 설정하면 API 호출 시 자동 주입됩니다.
- `test`: `true`이면 테스트 환경, `false`이면 운영 환경

## 주요 메서드

| 분류 | 메서드 |
|------|--------|
| 전송 | `sendSMSMessage`, `sendLMSMessage`, `sendMMSMessage`, `sendMMSMessageFromFTP`, `sendMessage`, `sendMessages` |
| 예약취소 | `cancelReservedSMSMessage`, `cancelReservedSMSMessageByReceiptNum` |
| 조회 | `getSMSSendState`, `getSMSSendMessage`, `getSMSSendMessages`, `getMessagesByReceiptNum`, `getSMSSendMessagesByPaging` 등 |
| URL | `getSMSHistoryURL` |
| 유틸 | `getErrString`, `ping` |

## 관련 링크

- [전체 패키지 목록 (모노레포)](https://github.com/jonghun-park/barobill-sdk)

## License

ISC

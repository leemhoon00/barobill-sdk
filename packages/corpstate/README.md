# @barobill-sdk/corpstate

바로빌 사업자등록 상태조회 API TypeScript SDK (비공식)

> **이 패키지는 바로빌의 공식 SDK가 아닌, 비공식 SDK입니다.**
> 바로빌 API의 공식 문서는 [바로빌 API 레퍼런스](https://dev.barobill.co.kr/docs/references/%EB%B0%94%EB%A1%9C%EB%B9%8C-API-%EB%A0%88%ED%8D%BC%EB%9F%B0%EC%8A%A4-%EA%B0%9C%EC%9A%94)를 참고해 주세요.

## 설치

```bash
npm i @barobill-sdk/corpstate
```

## 사용법

```typescript
import { CorpStateClient } from '@barobill-sdk/corpstate';

const client = await CorpStateClient.create({
  certKey: 'your-cert-key',
  corpNum: '1234567890', // 기본 사업자등록번호 (선택)
  test: true,            // true: 테스트 환경 (기본값: false)
});

// 단건 조회
const result = await client.getCorpState({
  TargetCorpNum: '0987654321',
});

// 다건 조회
const results = await client.getCorpStates({
  TargetCorpNums: ['0987654321', '1122334455'],
});
```

- `certKey`: 바로빌 인증키
- `corpNum` (선택): 기본 사업자등록번호. 설정하면 API 호출 시 자동 주입됩니다.
- `test`: `true`이면 테스트 환경, `false`이면 운영 환경

## 주요 메서드

| 분류 | 메서드 |
|------|--------|
| 상태조회 | `getCorpState`, `getCorpStateEx`, `getCorpStates`, `getCorpStatesEx` |
| URL | `getCorpStateScrapRequestURL` |
| 유틸 | `getErrString`, `ping` |

## 관련 링크

- [전체 패키지 목록 (모노레포)](https://github.com/jonghun-park/barobill-sdk)

## License

ISC

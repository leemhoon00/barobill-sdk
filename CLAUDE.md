# CLAUDE.md

바로빌 SOAP API의 비공식 TypeScript SDK. pnpm 워크스페이스 + turbo 기반 모노레포.

## 핵심 명령어

```bash
pnpm install              # 의존성 설치
pnpm build                # 전체 패키지 빌드 (turbo가 의존성 순으로 실행)
pnpm generate:types       # WSDL → 타입 재생성
pnpm generate:wrapper     # wrapper 클라이언트 재생성
pnpm generate             # types → wrapper 순으로 일괄 실행
```

개별 패키지만 빌드하려면 `pnpm --filter @barobill-sdk/<pkg> build`.

## 구조

```
wsdl/                          # 바로빌 SOAP WSDL 원본 9개
scripts/
  generate-types.ts            # WSDL → wsdl-tsclient로 raw 타입 생성
  generate-wrapper.ts          # raw 타입 위에 얇은 wrapper 클라이언트 생성
packages/
  core/                        # BaseBarobillClient, 공통 설정·URL 해석
  ti, cashbill, edoc, card,    # 9개 서비스 패키지
  bankaccount, corpstate,
  sms, fax, kakaotalk
```

각 서비스 패키지 내부:
```
src/
  generated/                   # ❌ 직접 편집 금지 — generate:types 산출물
    client.ts                  #   wsdl-tsclient가 만든 SOAP 인터페이스
    definitions/               #   요청/응답 타입
  client.ts                    # ❌ 직접 편집 금지 — generate:wrapper 산출물
  index.ts                     # ❌ 직접 편집 금지 — generate:wrapper 산출물
```

## 코드 생성 파이프라인

1. `wsdl/*.wsdl` → `generate-types.ts` → `packages/<svc>/src/generated/` (wsdl-tsclient 호출)
2. `generated/client.ts`의 `*Async` 메서드 시그니처를 정규식으로 파싱 → `generate-wrapper.ts` → `packages/<svc>/src/client.ts`

wrapper는 `BaseBarobillClient`를 상속하고, 각 SOAP 메서드를 camelCase 비동기 메서드로 노출하며 `CERTKEY`(+선택적 `CorpNum`)를 자동 주입한다.

### auth mode 자동 판별

`generate-wrapper.ts`가 각 definition 파일에서 `CERTKEY`/`CorpNum` 필드 유무를 확인해 호출 방식을 결정:
- `both` → `this.call` (CERTKEY+CorpNum 주입, params에 `CorpNum?: string` 노출)
- `certKeyOnly` → `this.callWithCertKeyOnly` (CERTKEY만 주입)
- `none` → `this.callRaw` (Ping 같은 인증 불필요 메서드)

## ⚠️ 작업 시 주의

- **`src/client.ts`, `src/index.ts`, `src/generated/*`는 절대 직접 수정하지 말 것.** 모두 `pnpm generate:*`의 산출물이다. 동작을 바꾸려면 `scripts/` 아래 generator를 수정하고 재생성.
- **바로빌 API 변경 대응** → `wsdl/*.wsdl`을 새 버전으로 교체 후 `pnpm generate`.
- **wrapper 동작만 바꾸려면** (예: JSDoc 추가, 시그니처 변경) → `scripts/generate-wrapper.ts`만 수정 후 `pnpm generate:wrapper`.
- 모든 wrapper 메서드는 `Omit<T, 'CERTKEY'>` 패턴을 쓴다. `CERTKEY`는 사용자에게 노출되지 않는다.
- `CorpNum`은 인스턴스 기본값(`BarobillConfig.corpNum`) 또는 호출 시 params로 덮어쓰기 가능. 기본값이 없으면 호출 시 필수.

## 자주 하는 작업 패턴

### deprecated API 표시
`scripts/generate-wrapper.ts`의 `DEPRECATED_METHODS` 맵에 SOAP 메서드명(PascalCase, `Async` 제외)과 메시지를 추가하고 `pnpm generate:wrapper`. 4개의 공통 요금 API는 이미 등록됨. 서비스별 구버전 API는 아직 미반영(공식 문서의 각 서비스 페이지 "구버전 API" 섹션 참고).

### 새 서비스 패키지 추가
1. `wsdl/<NAME>.wsdl` 추가
2. `packages/<name>/` 디렉터리 + `package.json`, `tsconfig.json`, `tsup.config.ts` 작성 (기존 패키지 복사)
3. `scripts/generate-types.ts`의 `SERVICES`, `scripts/generate-wrapper.ts`의 `SERVICES`, `packages/core/src/url.ts`의 `SERVICE_NAMES`에 추가
4. `pnpm generate && pnpm build`

## 환경

- `BarobillConfig.test: true` → `testws.baroservice.com`
- `BarobillConfig.test: false` (기본) → `ws.baroservice.com`
- 빌드 출력은 `tsup`으로 CJS + ESM + d.ts 동시 생성.

# lamechang_portfolio

Next.js ベースの個人ポートフォリオサイト。

## スタック

- **フレームワーク**: Next.js 15 (App Router + Pages Router 併用) / React 18 / TypeScript 5.9 (`strict: true`)
- **UI**: MUI 7 (`@emotion/react`, `@emotion/styled`) / Tailwind CSS 3
- **状態管理**: Jotai 2
- **データ取得**: Apollo Client (GraphQL) / axios (+ `axios-case-converter`)
- **テスト**: Jest 29 (jsdom) / Playwright 1.55 (E2E)
- **Lint/Format**: ESLint (`next/core-web-vitals` + `prettier`) / Prettier

## ディレクトリ構成

ルーティングは App Router と Pages Router の二本立て。新規ページは原則 [app/](app/) 配下に追加する。

- [app/](app/) — App Router のルート。`layout.tsx` / `page.tsx` とサブルート (`movies`, `react-experiment`)
- [pages/](pages/) — Pages Router(既存ページのみ)
- [src/components/](src/components/) — `ui/`(汎用), `model/`(ドメイン固有), `pages/`(ページ単位合成)
- [src/context/](src/context/) — Jotai の `hooks/`, `model/`, `ui/`
- [src/domain/](src/domain/) — ドメインロジック(`movies`, `genres`, `tmdb`, `portfoilo`)
- [src/data/](src/data/) — API アダプタ(`adapters/`, `movies/`)
- [src/queries/](src/queries/) — GraphQL クエリ定義
- [src/lib/](src/lib/) — 汎用ユーティリティ(`array/`, `number/`, `seo/`)
- [src/services/](src/services/) — 横断サービス層
- [tests/](tests/) — Playwright E2E テスト
- [styles/](styles/) / [tailwind/](tailwind/) — グローバル/Tailwind スタイル

絶対 import は `src/*` 前提([tsconfig.json:3](tsconfig.json#L3) `baseUrl: "."`、Jest 側は [package.json:27-29](package.json#L27-L29) で `^src/(.*)$` にマップ)。

## よく使うコマンド

```bash
yarn dev               # 開発サーバー (http://localhost:3000)
yarn build             # 本番ビルド
yarn start             # 本番サーバー起動

yarn lint              # ESLint
yarn lint:fix          # ESLint 自動修正

yarn test              # Jest(全件)
yarn test:watch        # Jest watch

npx playwright test    # Playwright E2E
npx playwright test --ui
```

## コーディング規約

- **Lint ルール**([.eslintrc.js](.eslintrc.js))
  - `no-console`: warn(`console.log` は残さない)
  - `react/self-closing-comp`: error(空要素は必ず自己閉じ)
  - `unused-imports/no-unused-imports`: error
- **Prettier**([.prettierrc](.prettierrc)): printWidth 80 / tabWidth 2 / semi / `trailingComma: "es5"` / LF
- **TypeScript**: `strict: true`。`any` を安易に入れない
- **画像ドメイン**: `image.tmdb.org` のみ許可([next.config.js:5](next.config.js#L5))。新規ドメインを追加する場合は `next.config.js` を更新

## 編集時の注意

- 新規コンポーネントは `src/components/ui/`(汎用) or `src/components/model/`(ドメイン固有)を使い分ける
- API 呼び出しは `src/data/` のアダプタ経由に統一。`axios-case-converter` でサーバー側 snake_case を camelCase に変換している前提
- テストは `*.test.ts(x)` もしくは `tests/` 配下。新規ユニットテストは対象ファイルと同階層に置く方針
- コミット前に `yarn lint` と `yarn test` を通す

## リンク

- デプロイ先: https://lamechang-dev.vercel.app/
- アーキテクチャ解説: https://lamechang-dev.hatenablog.com/entry/2023/01/15/133446

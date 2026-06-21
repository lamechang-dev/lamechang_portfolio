# プロジェクト構造

Next.js 15 (App Router + Pages Router 併用) / React 18 / TypeScript 5.9  
UI: MUI 7 + Tailwind CSS 3 / 状態管理: Jotai 2 / データ取得: axios
外部 API: TMDB API (映画データ) — SSR 側のみ呼び出す
テスト: Jest 29 (jsdom, ユニット) + Playwright 1.55 (E2E)

主要ディレクトリ:
- `app/` — App Router。新規ページはここに追加する
- `pages/` — Pages Router（既存ページのみ。新規追加禁止）
- `src/components/ui/` — 汎用 UI コンポーネント
- `src/components/model/` — ドメイン固有コンポーネント
- `src/components/pages/` — ページ単位の合成コンポーネント + `useViewModel.ts`
- `src/context/` — Jotai の atom 定義（`hooks/`, `model/`, `ui/`）
- `src/domain/` — ドメインロジック（`movies`, `genres`, `tmdb`, `portfoilo`）。各ディレクトリのファイル構成は以下:
  - `model.d.ts` — アプリ内部のドメイン型定義。外部 API の型に依存しない
  - `converter.ts` — 外部 API レスポンス型（例: `TmdbV3Movie`）をドメイン型に変換するピュア関数
  - `getter.ts` — ドメインモデルから値を取り出すピュア関数（表示用の加工など）
  - `constants.ts` — ドメイン固有の定数
- `src/data/` — API アダプタ（`adapters/`: axios クライアント、`movies/`: TMDB 呼び出し）
- `src/lib/` — 汎用ユーティリティ（`array/`, `number/`, `seo/`）
- `src/queries/` — GraphQL クエリ定義
- `tests/` — Playwright E2E テスト + `lib/` のユニットテスト

# コマンド

- `yarn dev` — 開発サーバー起動 (http://localhost:3000)
- `yarn build` — 本番ビルド
- `yarn lint` — ESLint 実行
- `yarn lint:fix` — ESLint 自動修正
- `yarn test` — Jest 全件実行（変更後は必ず実行）
- `yarn test:watch` — Jest watch モード
- `npx playwright test` — E2E テスト実行
- `npx playwright test --ui` — Playwright UI モードで実行

# コーディング規約

- TypeScript `strict: true`。`any` は使わない
- ESLint ルール厳守: `no-console`(warn)、`react/self-closing-comp`(error)、`unused-imports`(error)
- Prettier: printWidth 80 / tabWidth 2 / semi / trailingComma es5 / LF
- 絶対 import は `src/*` 起点（例: `import { Movie } from "src/domain/movies/model"`）
- スタイリングは原則 Tailwind CSS で行う（MUI の `sx` prop や `styled` は既存コードの踏襲のみ）
- 新規コンポーネントは `ui/`(汎用) か `model/`(ドメイン固有) を使い分ける
- ページロジックは `useViewModel.ts` に切り出し、コンポーネントを薄くする
- API 呼び出しは `src/data/` のアダプタ経由に統一する
  - 理由: `axios-case-converter` による snake_case→camelCase 変換がここで行われる
- Jotai の atom は `src/context/` 配下で管理し、コンポーネントに直書きしない
- 画像ドメインは `image.tmdb.org` のみ許可(`next.config.js`)。追加時は `next.config.js` を更新する
- イベントハンドラ・トグル関数の命名には必ず操作対象を含める（例: `handleToggle` → `handleGlassPanelToggle`、`toggle` → `toggleSidebar`）。何をトグル/操作するかが名前だけで分かるようにする

# やってはいけないこと

- `pages/` 配下に新規ページを追加しない（App Router の `app/` を使う）
- `console.log` をコードに残さない（ESLint warn で検出される）
- 環境変数(`TMDB_API_KEY`, `TMDB_SESSION_KEY`)をコードにハードコードしない
- TMDB API をクライアントサイドから呼ばない（SSR のみで呼び出す）
- `src/data/` を経由せずコンポーネント内で直接 `axios` を呼ばない
- コミット前に `yarn lint` と `yarn test` を通さない
- 空要素をセルフクローズしない書き方は禁止（例: `<Foo></Foo>` → `<Foo />` に直す）

# App Router のデータフェッチパターン

新規ページは必ずこのパターンに従う:

1. `app/**/page.tsx` は **async Server Component** にする
2. データ取得（`src/data/` のアダプタ呼び出し）はここで完結させる
3. 取得結果を props として `src/components/pages/` の Client Component に渡す

```tsx
// app/example/page.tsx（Server Component）
import ExamplePageComponent from "src/components/pages/example";
import { getExampleData } from "src/data/example";

const ExamplePage = async () => {
  const data = await getExampleData();
  return <ExamplePageComponent data={data} />;
};

export default ExamplePage;
```

## やってはいけないこと

- `app/**/page.tsx` に `"use client"` を書かない（Server Component を維持する）
- Client Component 内で fetch / axios を直接呼ばない
- `"use client"` が必要な場合は `src/components/pages/` 側のコンポーネントに書く

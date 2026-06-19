---
name: fix-linear-issue
description: linearに存在するIssueの実装を行う
---

Issue #$ARGUMETNS を修正する

1. MCPサーバー経由でLinearの $ARGUMETNS タスクを確認
2. $ARGUMETNSを使って `feat/$ARGUMETNS` ブランチを作成
3. 修正を実装し必要ならテストを追加
4. `yarn test` で全テストをパス
5. `yarn build` でビルドチェック
6. commit & push & PR作成
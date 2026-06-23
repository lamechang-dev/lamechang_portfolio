---
name: update-linear-issue
description: linearに存在するIssueの本文の更新を対話を通して行う
---

Issue #$ARGUMETNS を修正する

1. MCPサーバー経由でLinearの $ARGUMETNS タスクを確認
2. $ARGUMETNSを使って `feat/$ARGUMETNS` ブランチを作成
3. 要件が決まりきってないので、実装者との相談を通して本文を更新
4. 決定事項をもとに、MCPサーバー経由でLinearの本文を更新

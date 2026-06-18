# Deploy to Vercel

デプロイ前チェックを実行し、問題がなければ Vercel へデプロイする。

## 手順

1. **lint チェック**
   ```bash
   yarn lint
   ```
   エラーがあれば修正してから再実行する。警告(warn)は確認だけして進む。

2. **ユニットテスト**
   ```bash
   yarn test
   ```
   失敗があれば原因を調査・修正してから再実行する。

3. **本番ビルド確認**
   ```bash
   yarn build
   ```
   ビルドエラーがあれば修正する。

4. **デプロイ**
   `main` ブランチに push

5. デプロイ完了後、https://lamechang-dev.vercel.app/ が正常に表示されることをユーザーに確認するよう案内する。
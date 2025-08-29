# Lambdaローカル実行ワーク記録

## 2025/8/1 手が空いた時間

### 📦 ここまでできたことまとめ

- ✅ Lambda関数のローカル実行（Node.js）
- ✅ `event.json` を使った擬似入力テスト
- ✅ API Gateway形式のクエリパラメータ受け取り
- ✅ テンプレート文字列の書き方とトラブル回避
- ✅ try/catchによるエラーハンドリング

---

## 2025/8/28 curlでAPIをたたいてレスポンス確認

### 簡易HTTPサーバーを作成

- `index_apiGateway.js` の handler をそのまま利用
- GETリクエストでクエリパラメータ `name` を取得

### クエリパラメータなしでcurl

```bash
curl "http://localhost:3000"

{"message":"サイコパスorサロンパス"}
```
#### サーバーのログ

```bash
node server.js
Lambda API サーバー起動中: http://localhost:3000
GET /
GET /
```

### クエリパラメータ name 指定でcurl

```bash
curl -G --data-urlencode "name=オーキド博士" "http://localhost:3000"

{"message":"サイコパスorオーキド博士"}
```
#### サーバーのログ

```bash
node server.js
Lambda API サーバー起動中: http://localhost:3000
GET /?name=%E3%82%AA%E3%83%BC%E3%82%AD%E3%83%89%E5%8D%9A%E5%A3%AB
```
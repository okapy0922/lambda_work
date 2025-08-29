// server.js
// httpを使って簡易的なWebサーバーを立てる
const http = require("http");
// index.jsからexports.handlerをインポート
const { handler } = require("./index_apiGateway"); // GET handler をそのまま流用

// ポート指定
const PORT = 3000;

// サーバーを立てる
const server = http.createServer((req, res) => {
    // URLオブジェクトを使ってURLをパース
    // req.url の文字列を「部品ごとに分けられるURLオブジェクト」に変換
    // これを使うと、クエリパラメータやパスを簡単に取得できる

	//　GETリクエストを処理⇒lambda handlerを呼び出す
	console.log(req.method, req.url); // どんなリクエストが来たかログに出す

	if (req.method === "GET") { // GETリクエストはクエリパラメータからnameを取得する
    const url = new URL(req.url, `http://${req.headers.host}`);
    // Lambda 形式のイベントを作成
    const event = {
        queryStringParameters: { name: url.searchParams.get("name") }
    };

    // Lambda handler を呼び出す
    handler(event)
        .then((lambdaRes) => {
            // Lambda関数の戻り値をHTTPレスポンスとして返す
            res.writeHead(lambdaRes.statusCode || 200, { "Content-Type": "application/json", charset: "utf-8" });
            res.end(lambdaRes.body || JSON.stringify(lambdaRes));
        })
        .catch((err) => {
            // エラーハンドリング
            res.writeHead(500, { "Content-Type": "application/json", charset: "utf-8" });
            res.end(JSON.stringify({ error: err.message }));
        });

	} else {
		// GET以外のメソッドは405 Method Not Allowedを返す
		res.writeHead(405, { "Content-Type": "application/json", charset: "utf-8" });
		res.end(JSON.stringify({ error: "Method Not Allowed" }));
	}
});

// サーバー起動(createServerの外で呼び出す)
server.listen(PORT, () => {
    console.log(`Lambda API サーバー起動中: http://localhost:${PORT}`);
});
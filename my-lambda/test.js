// test.js
// index.jsからxports.handlerをインポート読み込みしている奴

const { handler } = require("./index");
// event.json というJSONファイルを読み込んで、テスト用の入力データにしておる。
const event = require("./event.json");

// handler は async関数なので、戻り値は Promise
// .then() はその Promise が解決（成功）したときに呼ばれる関数を登録するメソッド
// ここでは、Lambda関数の返り値を res に受け取り、console.log でターミナルに出力している

handler(event).then((res) => {
	console.log("lambdaの戻り値", res);
});

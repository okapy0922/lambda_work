// index.js

exports.handler = async(event) =>{
	// ここはハンドラの中。
	console.log("受け取ったイベント:", JSON.stringify(event));

	const name = event.name || "ハロー";
	const response = {
		statusCode: 200,
		body: JSON.stringify({message: 'ワーク' }),
	};

	return response;
};

// 各行の解説
// exports.handler = async (event) => {
// Lambda関数の**エントリポイント（入口）**
// AWS Lambdaではこの handler という名前が特別な意味を持っておる
// async なのは、非同期処理（Promise）を返せるようにするため

// console.log("受け取ったイベント:", JSON.stringify(event));
// これはデバッグログ。

// AWS Lambdaでも、console.log はCloudWatch Logsに記録されるぞ。

// ローカルでは node test.js 実行時にターミナルに表示される。
// この関数は何をしている？
//「event にある name を受け取って、こんにちはメッセージを JSON で返す」だけ！

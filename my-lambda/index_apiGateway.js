// ワークその２「（API Gateway風イベント受け取り）の全体」
// このコードは「URLの?name=○○」を受け取って、こんにちはメッセージを返すLambda。
//もし途中で何かあったら、ちゃんとエラーメッセージも返す安心設計

exports.handler = async (event) =>{
	// try { ... } catch (e) { ... tryのなかで問題が発生したらcatchがキャッチ
	try{
		const name = event.queryStringParameters?.name || "サロンパス";
		return{
			statusCode: 200,
			body: JSON.stringify({ message: `サイコパスor${name}`}),
		};
	}catch (e){
		console.error("エラー発生", e);
		return{
			statusCode: 500,
			body: JSON.stringify({ error: "サーバーエラーが発生しました "}),
		};
	}
};

// test_apiGateway.js
const { handler } = require("./index_apiGateway");
const event = require("./event.json");

handler(event).then((res) => {
  console.log("lambdaの戻り値", res);
});


const MessagesHelper = require("./libraries/MessagesHelper");
const OperatorsHelper = require("./libraries/OperatorsHelper");

const operators = OperatorsHelper.random(12);

console.log(operators);

(async () => {
  const pending = await MessagesHelper.getPending(1);
  console.log(pending);
})();

// console.log(MessagesHelper.getPending(1));
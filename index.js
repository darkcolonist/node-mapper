require('log-timestamp');
const MessagesHelper = require("./libraries/MessagesHelper");
const OperatorsHelper = require("./libraries/OperatorsHelper");

const operators = OperatorsHelper.random(12);
let noPending = 0;

console.log(operators);

(async () => {
  /* for (let index = 0; index < operators.length; index++) {
    const operatorEl = operators[index];
    const pendingMessages = await MessagesHelper.getPending(1);

    if (pendingMessages.length) {
      const pendingMessage = pendingMessages[0];
      // console.log("pending message found", pendingMessage, "for", operatorEl);
      await MessagesHelper.assignPending(pendingMessage.id, operatorEl);
    } else
      console.log('no pending messages found');
  } */

  for await (const operatorEl of operators) {
    const pendingMessages = await MessagesHelper.getPending(1);

    if (pendingMessages.length) {
      const pendingMessage = pendingMessages[0];
      // console.log("pending message found", pendingMessage, "for", operatorEl);
      await MessagesHelper.assignPending(pendingMessage.id, operatorEl);
    } else{
      console.log('no pending messages found');
      noPending++;

      if(noPending > 1){
        noPending = 0;
        await MessagesHelper.releaseAllMessages();
      }
    }
  }

  /* await operators.forEach(async operatorEl => {
    const pendingMessages = await MessagesHelper.getPending(1);
    
    if(pendingMessages.length){
      const pendingMessage = pendingMessages[0];
      // console.log("pending message found", pendingMessage, "for", operatorEl);
      await MessagesHelper.assignPending(pendingMessage.id, operatorEl);
    }else
      console.log('no pending messages found');
  }); */

  console.log("covered all operators!");
  // const pending = await MessagesHelper.getPending(1);
  // console.log(pending);
})();

// console.log(MessagesHelper.getPending(1));
require('log-timestamp');
const MappingHelper = require('./libraries/MappingHelper');
const OperatorsHelper = require("./libraries/OperatorsHelper");

async function mappingRun(){
  let operators = OperatorsHelper.random(12);
  
  console.log('waiting', operators);

  for (const operatorEl of operators) {
    MappingHelper.map(operatorEl);

    /**
     * so that we could keep our model going, we release all 
     * assigned messages
     */
    /* if (noPending > 1) {
      noPending = 0;
      await MessagesHelper.releaseAllMessages();
    } */
  }

  // setTimeout(async () => {
  //   await mappingRun();
  // }, 5000);
}

mappingRun();
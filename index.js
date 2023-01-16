require('log-timestamp');
const MappingHelper = require('./libraries/MappingHelper');
const MessagesHelper = require('./libraries/MessagesHelper');
const OperatorsHelper = require("./libraries/OperatorsHelper");

async function mappingRun(){
  // release all assigned messages before anything else
  await MessagesHelper.releaseAllMessages();

  let operators = OperatorsHelper.random(30);
  
  console.log('waiting', operators);

  for (const operatorEl of operators) {
    // await new Promise(resolve => setTimeout(resolve, .00001)); // simulate a delay

    /**
     * code below will assign single message to all operators. this is
     * to simulate pending message collision and we don't want that
     */
    // MappingHelper.map(operatorEl);

    /**
     * code below will enqueue mapping run hence, we're sure that
     * every item in queue will select pending then assign as soon
     * then the next queue will start with a fresh set of pending
     * messages
     */
    MappingHelper.enqueueMapJob(operatorEl);
  }
}

mappingRun();
const Database = require("./database");
const MessagesHelper = require("./MessagesHelper");
const Queue = require("./Queue");

class MappingHelper {
  static db = new Database();
  static mappingQueue = new Queue(1);

  static async map(operatorID){
    const pendingMessages = await MessagesHelper.getPending(1);
    if (!pendingMessages.length) {
      console.info('no pending messages for ', operatorID, 'try again later');
      return false;
    }

    const pendingMessage = pendingMessages[0];

    await MessagesHelper.assignPending(pendingMessage.id, operatorID);

    return true;
  }

  static async enqueueMapJob(operatorID){
    MappingHelper.mappingQueue.add(
      async () => {
        await MappingHelper.map(operatorID);
        // await new Promise(resolve => setTimeout(resolve, 500)); // simulate a delay
      });
  }
}

module.exports = MappingHelper;
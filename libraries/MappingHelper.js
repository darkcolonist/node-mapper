const Database = require("./database");
const MessagesHelper = require("./MessagesHelper");

class MappingHelper {
  static db = new Database();

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
}

module.exports = MappingHelper;
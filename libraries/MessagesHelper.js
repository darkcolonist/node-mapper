const Database = require("./database");

class MessagesHelper {
  static db = new Database();

  static async getPending(howMany) {
    let statement = 'SELECT * FROM tbl_pending_messages';
    statement += ' WHERE status=\'pending\' LIMIT '+howMany+';';

    return await MessagesHelper.db.query(statement);
    // await MessagesHelper.db.query('SELECT * FROM tbl_pending_messages')
    //   .then(results => {
    //     console.log(results);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   })
    //   .finally(() => {
    //     process.exit();
    //   });
  }

  static async assignPending(id, operator){
    const statement = 'UPDATE tbl_pending_messages SET `status` = ?, assigned_to = ? WHERE id = ?';
    const statementData = [
      'assigned',
      operator,
      id
    ];

    console.log(['assigning', id, operator]);

    try {
      await MessagesHelper.db.query(statement, statementData);
    } catch (error) {
      console.error(error);
    }
  }

  static async releaseAllMessages(){
    const statement = 'UPDATE tbl_pending_messages SET `status` = ?, assigned_to = ?';
    const statementData = [
      'pending',
      null
    ];

    console.log(['released all assigned messages']);

    try {
      await MessagesHelper.db.query(statement, statementData);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = MessagesHelper;
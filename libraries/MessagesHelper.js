const Database = require("./database");

class MessagesHelper {
  static async getPending(howMany) {
    const db = new Database();

    let statement = 'SELECT * FROM tbl_pending_messages';
    statement += ' WHERE status=\'pending\' LIMIT '+howMany+';';

    return await db.query(statement);
    // await db.query('SELECT * FROM tbl_pending_messages')
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
}

module.exports = MessagesHelper;
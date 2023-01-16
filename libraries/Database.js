const mysql = require('mysql2');
require('dotenv').config();

class Database {
  constructor() {
    if (Database.instance) {
      console.log('reusing existing database instance.');
      return Database.instance;
    }

    this.connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    });
  }

  query(sql, data) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, data, (error, results) => {
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  }

  close() {
    return new Promise((resolve, reject) => {
      this.connection.end(error => {
        if (error) {
          return reject(error);
        }
        resolve();
      });
    });
  }
}

module.exports = Database;

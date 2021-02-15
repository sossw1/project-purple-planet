require('dotenv').config();
const mysql = require('mysql2');
let host = process.env.DB_HOST;
let user = process.env.DB_USER;
let password = process.env.DB_PASS;
let database = process.env.DB_NAME;
let db;

if (process.env.JAWSDB_MARIA_URL) {
  db = mysql.createConnection(process.env.JAWSDB_MARIA_URL);
} else {
  db = mysql.createConnection({
    host,
    user,
    password,
    database
  });
}
console.log(db);
db.connect((err) => {
  if (err) {
    console.log(`There was an error connecting to the database: ${err.stack}`);
    return;
  }
  console.log(`Connected to the database: ${db.threadId}`);
});

module.exports = db;
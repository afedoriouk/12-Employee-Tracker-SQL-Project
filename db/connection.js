const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "alexander123",
  database: "employeesDB"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;

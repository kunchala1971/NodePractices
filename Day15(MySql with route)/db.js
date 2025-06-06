const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", 
  database: "testdb",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL Connected");
});

module.exports = conn;

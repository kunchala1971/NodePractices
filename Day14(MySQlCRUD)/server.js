const http = require("http");
const mysql = require("mysql2");
const url = require("url");
const PORT = 4000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sql_test'
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database.");
});


const parseBody = (req, callback) => {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => callback(JSON.parse(body)));
};

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;
  const id = pathname.split("/")[2];

  res.setHeader("Content-Type", "application/json");


  if (pathname === "/users" && method === "GET") {
    db.query("SELECT * FROM users", (err, results) => {
      if (err) throw err;
      res.end(JSON.stringify(results));
    });
  }


  else if (pathname.startsWith("/users/") && method === "GET") {
    db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
      if (err) throw err;
      if (results.length > 0) {
        res.end(JSON.stringify(results[0]));
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "User not found" }));
      }
    });
  }


  else if (pathname === "/users" && method === "POST") {
    parseBody(req, (body) => {
      const { name, email } = body;
      db.query(
        "INSERT INTO users (name, email) VALUES (?, ?)",
        [name, email],
        (err, result) => {
          if (err) throw err;
          res.statusCode = 201;
          res.end(JSON.stringify({ id: result.insertId, name, email }));
        }
      );
    });
  }


  else if (pathname.startsWith("/users/") && method === "PUT") {
    parseBody(req, (body) => {
      const { name, email } = body;
      db.query(
        "UPDATE users SET name = ?, email = ? WHERE id = ?",
        [name, email, id],
        (err, result) => {
          if (err) throw err;
          if (result.affectedRows === 0) {
            res.statusCode = 404;
            res.end(JSON.stringify({ message: "User not found" }));
          } else {
            res.end(JSON.stringify({ id, name, email }));
          }
        }
      );
    });
  }


  else if (pathname.startsWith("/users/") && method === "DELETE") {
    db.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
      if (err) throw err;
      if (result.affectedRows === 0) {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "User not found" }));
      } else {
        res.statusCode = 204;
        res.end();
      }
    });
  }


  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

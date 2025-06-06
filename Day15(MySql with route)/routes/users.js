const express = require("express");
const router = express.Router();
const db = require("../db");

// CREATE - Add new user
router.post("/add", (req, res) => {
  const { name, email } = req.body;
  const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
  db.query(sql, [name, email], (err, result) => {
    if (err) throw err;
    res.send("User added successfully");
  });
});

// READ - Get all users
router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// READ - Get  user
router.get("/:id", (req, res) => {
  db.query("SELECT * FROM users where id=?",[req.params.id], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
// UPDATE - Update user
router.put("/update/:id", (req, res) => {
  const { name, email } = req.body;
  const sql = "UPDATE users SET name = ?, email = ? WHERE id = ?";
  db.query(sql, [name, email, req.params.id], (err, result) => {
    if (err) throw err;
    res.send("User updated successfully");
  });
});

// DELETE - Delete user
router.delete("/delete/:id", (req, res) => {
  db.query("DELETE FROM users WHERE id = ?", [req.params.id], (err, result) => {
    if (err) throw err;
    res.send("User deleted successfully");
  });
});

module.exports = router;

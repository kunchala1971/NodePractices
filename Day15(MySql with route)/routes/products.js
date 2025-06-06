const express = require("express");
const router = express.Router();
const db = require("../db");

// CREATE - Add new product
router.post("/add", (req, res) => {
  const { product_name, price } = req.body;
  const sql = "INSERT INTO products (product_name, price) VALUES (?, ?)";
  db.query(sql, [product_name, price], (err, result) => {
    if (err) throw err;
    res.send("Product added successfully");
  });
});

// READ - Get all products
router.get("/", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// UPDATE - Update user
router.put("/update/:id", (req, res) => {
  const { product_name, price } = req.body;
  const sql = "UPDATE products SET product_name = ?, price = ? WHERE id = ?";
  db.query(sql, [product_name, price, req.params.id], (err, result) => {
    if (err) throw err;
    res.send("Product updated successfully");
  });
});

// DELETE - Delete user
router.delete("/delete/:id", (req, res) => {
  db.query("DELETE FROM products WHERE id = ?", [req.params.id], (err, result) => {
    if (err) throw err;
    res.send("Product deleted successfully");
  });
});

module.exports = router;

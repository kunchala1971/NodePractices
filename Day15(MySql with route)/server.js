
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users");
const productRoutes = require("./routes/products");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);

});

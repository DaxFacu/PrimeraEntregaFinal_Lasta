import express from "express";
import { ProductManager } from "./ProductManager.js";
import { CartManager } from "./CartManager.js";
import { productManagerRouter } from "./routes/products.router.js";
import { cartRouter } from "./routes/cart.router.js";

const app = express();
const port = 8080;
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productManagerRouter);

app.use("/api/carts", cartRouter);

app.get("*", (req, res) => {
  res.status(404).send({ status: "error", data: "Página no encontrada" });
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});

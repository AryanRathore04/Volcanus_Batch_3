import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import { Products } from "./Models/Product.js";
import { addProduct } from "./Controllers/product.js";

const app = express();

app.use(bodyParser.json());

// MVC => Models Views Controllers

// add product
app.post("/api/product/add", addProduct);

// get product
app.get("/api/product/get", async (req, res) => {
  try {
    let products = await Products.find().sort({ createdAt: -1 });
    res.json({ message: "All Products ", products, success: true });
  } catch (error) {
    res.json({ message: "Internal Server error", success: false });
  }
});

// get product by Id
app.get("/api/product/:id", async (req, res) => {
  const id = req.params.id;

  try {
    let product = await Products.findById(id);
    res.json({ message: "Product Detail", product, success: true });
  } catch (error) {
    res.json({ message: "Internal Server error", success: false });
  }
});

// update product by Id
app.put("/api/product/:id", async (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  try {
    let product = await Products.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!product) return res.json({ message: "Invalid Id", success: false });
    res.json({
      message: "Your Product has been Updated...!",
      product,
      success: true,
    });
  } catch (error) {
    res.json({ message: "Internal Server error", success: false });
  }
});

// delete product by Id
app.delete("/api/product/:id", async (req, res) => {
  const id = req.params.id;

  try {
    let product = await Products.findByIdAndDelete(id);
    if (!product) return res.json({ message: "Invalid Id", success: false });
    res.json({
      message: "Your Product has been Deleted...!",
      success: true,
    });
  } catch (error) {
    res.json({ message: "Internal Server error", success: false });
  }
});

mongoose
  .connect(
    "mongodb+srv://sumanmalakar2022:5albIa4990YThPOg@cluster0.ddicszz.mongodb.net/",
    {
      dbName: "Volcanus_MERN_Batch_3",
    }
  )
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(() => console.log("You are Offline..."));

const port = 1000;
app.listen(port, () => console.log(`server is running on port ${port}`));

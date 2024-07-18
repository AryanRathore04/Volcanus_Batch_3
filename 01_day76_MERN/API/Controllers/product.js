import { Products } from "../Models/Product.js";

// add Product
export const addProduct = async (req, res) => {
  // console.log(req.body)
  try {
    let product = await Products.create(req.body);
    res.json({
      message: "Your product has been added...",
      product,
      success: true,
    });
  } catch (error) {
    res.json({ message: "Internal Server error", success: false });
  }
};

// get Product
export const getProduct = async (req, res) => {
  try {
    let products = await Products.find().sort({ createdAt: -1 });
    res.json({ message: "All Products ", products, success: true });
  } catch (error) {
    res.json({ message: "Internal Server error", success: false });
  }
};

// get Product By Id
export const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    let product = await Products.findById(id);
    res.json({ message: "Product Detail", product, success: true });
  } catch (error) {
    res.json({ message: "Internal Server error", success: false });
  }
};

// update Product By Id
export const updateProductById = async (req, res) => {
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
};

// delete Product by Id
export const deleteProductById = async (req, res) => {
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
};

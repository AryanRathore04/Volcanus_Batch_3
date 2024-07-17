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
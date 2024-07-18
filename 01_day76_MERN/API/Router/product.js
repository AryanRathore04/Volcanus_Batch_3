import express from 'express';
import { addProduct, deleteProductById, getProduct, getProductById, updateProductById } from '../Controllers/product.js';

const router = express.Router();

// @method - post
// @dsc - add Product
// @path - /api/product/add
router.post('/add',addProduct)


// @method - get
// @dsc - get Product
// @path - /api/product/get
router.get("/get",getProduct)


// @method - get
// @dsc - get Product By Id
// @path - /api/product/:id
router.get("/:id",getProductById)


// @method - put
// @dsc - update product by Id
// @path - /api/product/:id
router.put("/:id",updateProductById)


// @method - delete
// @dsc - delete product by Id
// @path - /api/product/:id
router.delete("/:id",deleteProductById)


export default router;
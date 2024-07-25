import React from "react";

const AddProduct = () => {
  return (
    <div>
      {/* <h1 className="text-center">Add Product</h1> */}

      <div
        className="container my-5"
        style={{
          border: "2px solid blue",
          padding: "20px",
          width: "650px",
          borderRadius: "10px",
        }}
      >
        <form>
          <div className="mb-3">
            <label className="form-label">Product Title</label>
            <input type="text" className="form-control bg-black text-light" />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <input type="text" className="form-control bg-black text-light" />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <select className="form-select bg-black text-light" aria-label="Default select example">
              <option selected>Select Category</option>
              <option value="1">Mobiles</option>
              <option value="2">Laptops</option>
              <option value="3">Tablets</option>
              <option value="4">Cameras</option>
              <option value="5">HeadPhones</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Qty</label>
            <input type="number" className="form-control bg-black text-light" />
          </div>

          <div className="mb-3">
            <label className="form-label">Img Url</label>
            <input type="text" className="form-control bg-black text-light" />
          </div>

          <div className="d-grid col-6 mx-auto mt-5">
            <button type="submit" className="btn btn-warning">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

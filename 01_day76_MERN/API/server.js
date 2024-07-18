import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import productRouter from "./Router/product.js";

const app = express();

app.use(bodyParser.json());

// product router
app.use("/api/product", productRouter);

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

const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.yedo6v8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

//api creation
app.get("/", (req, res) => {
  res.send("Express app is running");
});

//image storage engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });
//creating upload endpoint for images
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    imageUrl: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

//schema for creating products
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

//addProduct controller
app.post("/addproduct", async (req, res) => {
  // let products = await Product.find({});
  // let id;
  // if (products.length > 0) {
  //   let last_product_array = products.slice(-1);
  //   let last_product = last_product_array[0];
  //   id = last_product + 1;
  // } else {
  //   id = 1;
  // }
  const product = new Product({
    id: req.body.id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    price: req.body.price,
  });
  console.log(product);
  await product.save();
  console.log("saved the product");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//api for removing the product
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("removed the product");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//api for getting allproducts
app.get("/allproduct", async (req, res) => {
  const products = await Product.find({});
  console.log("All products fetched");
  res.send(products);
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on port" + port);
  } else {
    console.log("error:" + error);
  }
});


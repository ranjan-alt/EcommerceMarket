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
const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required: true
    }, 
    name:{
        type: String,
        required:true
    }
})

app.listen(port, (error) => {
  if (!error) {
    console.log("Server is running on port" + port);
  } else {
    console.log("error:" + error);
  }
});

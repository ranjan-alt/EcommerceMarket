//this component is called in admin
import { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import upload_area from "../assets/upload_area.svg";
const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    id: "",
    name: "",
    image: "",
    category: "",
    price: "",
  });

  useEffect(() => {
    // Generate unique ID when component mounts
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      id: generateUniqueId(),
    }));
  }, []);

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const generateUniqueId = () => {
    // Generate a unique ID
    const timestamp = new Date().getTime();
    const random = Math.random().toString(36).substring(2, 8);
    return timestamp + "-" + random;
  };

  const Add_Product = async () => {
    // const id = generateUniqueId();
    console.log(productDetails);
    // let responseData;
    // let product = { ...productDetails, id };

    // let formData = new FormData();
    // formData.append("product", image);

    // await fetch("http://localhost:4000/upload", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //   },
    //   body: formData,
    // })
    //   .then((resp) => {
    //     resp.json();
    //   })
    //   .then((data) => {
    //     responseData = data;
    //   });

    // if (responseData.success) {
    //   product.image = responseData.image_url;
    //   console.log(product);
    //  }

    await fetch("http://localhost:4000/addproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(productDetails),
    })
      .then((resp) => resp.json())
      .then((data) =>
        data.success ? alert("Product added") : alert("Failed to add")
      );
  };
  return (
    <>
      <div>
        <h4>Product title</h4>
        <input
          type="text"
          name="name"
          placeholder="Type Here....."
          value={productDetails.name}
          onChange={changeHandler}
        />
      </div>
      <div>
        <h4>Price</h4>
        <input
          type="number"
          price="price"
          name="price"
          value={productDetails.price}
          onChange={changeHandler}
        />
      </div>
      {/* <div>
        <h4>Product Category</h4>
        <input type="text" />
      </div> */}
      <div>
        <h4>Product Category</h4>
        <select
          name="category"
          id=""
          value={productDetails.category}
          onChange={changeHandler}
        >
          <option value="Women">women</option>
          <option value="Men">men</option>
          <option value="Kids">Kids</option>
        </select>
      </div>
      <div>
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_area} alt="" />
        </label>
        <input
          type="file"
          name="image"
          id="file-input"
          onChange={imageHandler}
        />
      </div>
      <button onClick={() => Add_Product()}>
        <MdAdd /> Product
      </button>
    </>
  );
};

export default AddProduct;

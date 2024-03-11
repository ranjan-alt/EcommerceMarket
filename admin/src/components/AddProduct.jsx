//this component is called in admin
import { useState } from "react";
import { MdAdd } from "react-icons/md";
import upload_area from "../assets/upload_area.svg";
const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "",
    price: "",
  });
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => {
        resp.json();
      })
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
    }
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
          <option value="men">men</option>
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

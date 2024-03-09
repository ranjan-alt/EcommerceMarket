//this component is called in admin
import { useState } from "react";
import { MdAdd } from "react-icons/md";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <>
      <div>
        <h4>Product title</h4>
        <input type="text" name="name" placeholder="Type Here....." />
      </div>
      <div>
        <h4>Price</h4>
        <input type="number" price="price" />
      </div>
      <div>
        <h4>Product Category</h4>
        <input type="text" />
      </div>
      <div>
        <h4>Product Category</h4>
        <select name="" id="">
          <option value="Women">women</option>
          <option value="men">men</option>
          <option value="Kids">Kids</option>
        </select>
      </div>
      <div>
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image):null} alt="" />
        </label>
        <input
          type="file"
          name="image"
          id="file-input"
          onChange={imageHandler}
        />
      </div>
      <button>
        <MdAdd /> Product
      </button>
    </>
  );
};

export default AddProduct;

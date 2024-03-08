// This component is called in ProductHd component

import { useContext } from "react";
import { MdStar } from "react-icons/md";
import { ShopContext } from "../Context/ShopContext";

const ProductDisplay = (props) => {
  console.log(props);
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <>
      <div>
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
        <MdStar />
        <p>111</p>
        <h1>{product.name}</h1>
        <h4>Select size</h4>
        <div>S</div>
        <div>M</div>
        <div>L</div>
        <button
          style={{ border: "2px solid red" }}
          onClick={() => addToCart(product.id)}
        >
          Add to cart
        </button>
        <button>Buy it now</button>
      </div>
    </>
  );
};

export default ProductDisplay;

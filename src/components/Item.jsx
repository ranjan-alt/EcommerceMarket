//this component is called in popular component(parent)

import { Link } from "react-router-dom";

const Item = ({ id, name, image, price, rating, props }) => {
  console.log(props);
  return (
    <>
      <div>
        <Link to={`product/${id}`}></Link>
      </div>
      <div>
        <h4>{name}</h4>
        <p>{price}</p>
        <p>{rating}</p>
      </div>
    </>
  );
};

export default Item;

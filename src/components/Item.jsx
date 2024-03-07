//this component is called in popular component(parent)

import { Link } from "react-router-dom";

const Item = ({ id, name, price, rating }) => {
  // console.log(props);
  console.log(id);
  return (
    <>
      <div>
        <Link to={`product/${id}`}>
          <h4>{name}</h4>
        </Link>
        <p>{price}</p>
        <p>{rating}</p>
      </div>
    </>
  );
};

export default Item;

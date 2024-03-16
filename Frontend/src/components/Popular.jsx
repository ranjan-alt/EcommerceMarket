//this component is called in home component so home is parent

// import POPULAR from "../assets/popular";
import { useEffect, useState } from "react";
import Item from "./Item";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popularproduct")
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, []);
  return (
    <>
      <h1>Popular products</h1>
      <div>
        {popularProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            category={item.category}
            price={item.price}
            rating={item.rating}
          />
        ))}
        ;
      </div>
    </>
  );
};

export default Popular;

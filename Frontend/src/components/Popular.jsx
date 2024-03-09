//this component is called in home component so home is parent

import POPULAR from "../assets/popular";
import Item from "./Item";

const Popular = () => {
  return (
    <>
      <h1>Popular products</h1>
      <div>
        {POPULAR.map((item) => (
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

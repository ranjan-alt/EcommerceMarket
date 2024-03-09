import POPULAR from "../assets/popular";
import Item from "./Item";

const RelatedProducts = () => {
  return (
    <>
      <h1>Related Products</h1>
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

export default RelatedProducts;

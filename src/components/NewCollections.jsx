import LATEST from "../assets/latest";
import Item from "./Item";

const NewCollections = () => {
  return (
    <>
      <h1>NEW COLLECTION</h1>
      {LATEST.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          category={item.category}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </>
  );
};

export default NewCollections;

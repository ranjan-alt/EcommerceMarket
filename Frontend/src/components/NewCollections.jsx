// import LATEST from "../assets/latest";
import { useEffect, useState } from "react";
import Item from "./Item";

const NewCollections = () => {
  const [new_collection, setNew_collection] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/newcollection")
      .then((response) => response.json())
      .then((data) => setNew_collection(data));
  }, []);
  return (
    <>
      <h1>NEW COLLECTION</h1>
      {new_collection.map((item) => (
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

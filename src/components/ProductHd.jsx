//this component is called in product.jsx

import ProductDisplay from "./ProductDisplay";

const ProductHd = (props) => {
  const { product } = props;
  return (
    <div>
      productHd component
      <h1>{product.category}</h1>
      <p>{product.name}</p>
      {/* <ProductDisplay product={product} /> */}
    </div>
  );
};

export default ProductHd;

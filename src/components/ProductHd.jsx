const ProductHd = (props) => {
  const { product } = props;
  return (
    <div>
      productHd
      {product.category}
      {product.name}
    </div>
  );
};

export default ProductHd;

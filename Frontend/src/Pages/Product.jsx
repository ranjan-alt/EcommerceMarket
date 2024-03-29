import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductHd from "../components/ProductHd";
import ProductDisplay from "../components/ProductDisplay";
import ProductDescription from "../components/ProductDescription";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { all_products } = useContext(ShopContext);

  console.log("All Products:", all_products);
  // console.log(all_products);
  const { productId } = useParams();

  console.log("Product ID from URL:", typeof productId);

  // Convert productId to a number
  // const productIdNumber = parseInt(productId);

  const product = all_products.find((e) => e.id === productId);

  console.log("Found Product:", product);
  // console.log(product, "ranjan");
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <section>
        <div>
          {/* ab dekho ye jo product variable hai isko hm kahin bhi use kar sakte hain */}
          <ProductHd product={product} />
          <ProductDisplay product={product} />
          <ProductDescription />
          <RelatedProducts />
        </div>
      </section>
    </>
  );
};

export default Product;

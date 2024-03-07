import all_products from "../assets/allproducts"

const Category = ({ category, banner }) => {
    return (
        <>
            <div>
                <img src={banner} alt="" />
            </div>
            <div>
                <h5>Showing 1-12 out of 36 products</h5>
            </div>
            <div>
                {all_products.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        category={item.category}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </>
    )
}


export default Category
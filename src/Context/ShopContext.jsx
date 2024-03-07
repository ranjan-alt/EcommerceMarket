import { createContext } from "react";
import all_products from "../assets/allproducts";

export const ShopContext = createContext(null)


const ShopContextProvider =(props)=>{
    const contextValue ={all_products}
    return(
        <ShopContext.Provider value={createContext}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;
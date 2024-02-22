import React, { createContext, useState } from "react";
import all_products from '../assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart = {};
    for(let index = 0;index<all_products.length+1;index++)
    {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props)=>{
    const [cartItems,setCartItems] = useState(getDefaultCart())
    

    const addToCart = (itemId) => {
        setCartItems(prev => {
            return {
                ...prev,
                [itemId]: prev[itemId] + 1
            };
        });
    };

    console.log(cartItems)

    const removeFromCart = (itemId) => {
        setCartItems(prev => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId] > 0) {
                updatedCart[itemId] -= 1;
            }
            return updatedCart;
        });
    };

    const getTotalCartAmount = ()=>{
        let TotalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo = all_products.find((p)=>p.id === Number(item))
                TotalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return TotalAmount
    }

    const contextValue = {all_products,cartItems,addToCart,removeFromCart,getTotalCartAmount}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
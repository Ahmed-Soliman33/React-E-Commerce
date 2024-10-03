import React, { createContext, useState, useEffect } from 'react';
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);
const name = localStorage.getItem("name");
const password = localStorage.getItem("password");

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    // Initialize cartItems from localStorage or fallback to default cart
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    const [cartItems, setCartItems] = useState(storedCartItems || getDefaultCart());

    // Initialize total items from localStorage or set to 0
    const storedTotalItems = localStorage.getItem("TotalCartItem");
    const [totalItems, setTotalItems] = useState(storedTotalItems || 0);

    // Update localStorage whenever cartItems change
    useEffect(() => {
        if (name && password) {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            updateTotalCartItem();
        }
    }, [cartItems]); // this runs whenever cartItems changes

    const addToCart = (itemId) => {
        if (name && password) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
            updateTotalCartItem()
        }
    }

    const removeFromCart = (itemId) => {
        if (name && password) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
            updateTotalCartItem()
        }
    }

    const getTotalCartAmount = () => {
        if (name && password) {
            let totalAmount = 0;
            for (let item in cartItems) {
                if (cartItems[item] > 0) {
                    let itemInfo = all_product.find((product) => product.id === Number(item));
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
            return totalAmount;
        }
    }

    const updateTotalCartItem = () => {
        if (name && password) {
            let totalItem = 0;
            for (const item in cartItems) {
                if (cartItems[item] > 0) {
                    totalItem += cartItems[item];
                }
            }
            setTotalItems(totalItem);
            localStorage.setItem("TotalCartItem", totalItems);
        }
    }

    const contextValue = { getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart, totalItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;

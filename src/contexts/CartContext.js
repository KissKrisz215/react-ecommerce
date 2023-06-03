import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        console.log(item);
        setCart((prevItems) => [...prevItems, item]);
        console.log(cart);
    }

    return(
        <CartContext.Provider value={{cart, setCart, addToCart}}>
            {children}
        </CartContext.Provider>
    );
}
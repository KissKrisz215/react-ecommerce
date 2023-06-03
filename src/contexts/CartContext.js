import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [finalPrice, setFinalPrice] = useState(null);

    console.log(cart);

    const addToCart = (item) => {
        const doesIncludes = cart.find((product) => product.id === item.id);
        const cartCopy = JSON.parse(JSON.stringify(cart));
        if(doesIncludes !== undefined){
            const product = cartCopy.find((product) => product.id === item.id);
            if(product){
                product.quantity += 1;
                product.final = product.quantity * product.price;
                setCart(cartCopy);
            }}else if(doesIncludes === undefined){
                item.quantity = 1;
                item.final = item.quantity * item.price;
                cartCopy.push(item)
                setCart(cartCopy)
            }
        }

        const changeCart = (event,id) => {
            const cartCopy = JSON.parse(JSON.stringify(cart));
            const findItem = cartCopy.find((item) => item.id === id);
            const quantity = event.target.value;
            if(findItem && quantity >= 1){
                findItem.quantity = quantity;
                setCart(cartCopy);
            }else if(findItem && quantity <= 1){
                const filteredCart = cartCopy.filter((item) => item.id !== id);
                setCart(filteredCart);
            }
        }

        const deleteProduct = (id) => {
            const cartCopy = JSON.parse(JSON.stringify(cart));
            const filteredArray = cartCopy.filter((item) => item.id !== id);
            setCart(filteredArray)
        }


    return(
        <CartContext.Provider value={{cart, setCart, addToCart, changeCart, deleteProduct, finalPrice}}>
            {children}
        </CartContext.Provider>
    );
}
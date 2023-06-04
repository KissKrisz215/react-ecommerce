import React, { createContext, useState } from 'react';
import phones from '../data/phones'

export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {

    const [productsList, setProductsList] = useState(phones);

    return(
        <ProductsContext.Provider value={{productsList, setProductsList}}>
            {children}
        </ProductsContext.Provider>
    );
}


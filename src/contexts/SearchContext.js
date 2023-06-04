import React, { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';
import {ProductsContext} from './ProductsContext';
import phones from '../data/phones';

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {

    const [search, setSearch] = useState([]);
    const [price, setPrice] = useState(true);
    const {productsList, setProductsList} = useContext(ProductsContext);

    useEffect(() => {
        if(search.length === 0){
                setProductsList(phones)
        }else{
            const productsListCopy = JSON.parse(JSON.stringify(phones));
            console.log("executed", productsList);
            const filterProducts = productsListCopy.filter((item) => search.includes(item.brand));
            setProductsList(filterProducts)
        }
    }, [search])

    return(
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
    );
}


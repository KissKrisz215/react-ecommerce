import React, { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';
import {ProductsContext} from './ProductsContext';
import phones from '../data/phones';

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {

    const [search, setSearch] = useState([]);
    const [sort, setSort] = useState(null);
    const {productsList, setProductsList} = useContext(ProductsContext);

    useEffect(() => {
        if(search.length === 0){
                setProductsList(phones)
        }else{
            const productsListCopy = JSON.parse(JSON.stringify(phones));
            const filterProducts = productsListCopy.filter((item) => search.includes(item.brand));
            setProductsList(filterProducts)
        }
    }, [search])

    useEffect(() => {
        if(sort === null){
            setProductsList(phones)
            const searchCopy = [...search];
            setSearch(searchCopy);
        }else if(sort === true){
            const productsListCopy = JSON.parse(JSON.stringify(productsList));
            const sortedProducts = productsListCopy.sort((a,b) => a.price - b.price);
            setProductsList(sortedProducts)
        }else if(sort === false){
            const productsListCopy = JSON.parse(JSON.stringify(productsList));
            const sortedProducts = productsListCopy.sort((a,b) => b.price - a.price);
            setProductsList(sortedProducts)
        }

    }, [sort]);

    return(
        <SearchContext.Provider value={{search, setSearch, sort, setSort}}>
            {children}
        </SearchContext.Provider>
    );
}


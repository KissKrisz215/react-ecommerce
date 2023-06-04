import { useState } from 'react';
import { Product } from './Product';
import { nanoid } from 'nanoid';
import { LayoutContext } from '../contexts/LayoutContext';
import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import { SearchContext } from '../contexts/SearchContext';

export function Products({currentPage}){
    const {layout, setLayout} = useContext(LayoutContext);
    const {productsList, setProductsList} = useContext(ProductsContext)
    const [productPerPage, setProductPerPage] = useState(12);

    const indexOfLastProducts = currentPage * productPerPage;
    const indexOfFirstProducts = indexOfLastProducts + productPerPage;
    const currentProducts = productsList.slice(indexOfLastProducts, indexOfFirstProducts)
    return(
        <div className={layout === "small" ? 'grid-container-small' : ' grid-container-large'}>
        {currentProducts.map((product) => {
            return(
            <Product key={nanoid()} product={product} />
            );
        })}
        </div>
    );
}
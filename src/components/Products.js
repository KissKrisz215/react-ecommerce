import phones from '../data/phones'
import { useState } from 'react';
import { Product } from './Product';
import { nanoid } from 'nanoid';
import { LayoutContext } from '../contexts/LayoutContext';
import { useContext } from 'react';

export function Products({searchValue, setSearchValue, currentPage}){
    const {layout, setLayout} = useContext(LayoutContext);
    const [productPerPage, setProductPerPage] = useState(12);

    const indexOfLastProducts = currentPage * productPerPage;
    const indexOfFirstProducts = indexOfLastProducts + productPerPage;
    const currentProducts = phones.slice(indexOfLastProducts, indexOfFirstProducts)
    return(
        <div className={layout === "small" ? 'grid-container-small' : ' grid-container-large'}>
        {currentProducts.map((product) => (
        <Product key={nanoid()} product={product} />
        ))}
        </div>
    );
}
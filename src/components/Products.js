import phones from '../data/phones'
import { useState } from 'react';
import { Product } from './Product';

export function Products(){

    const [productsPages, setProductsPages ] = useState(phones.length / 12)
    const [productPerPage, setProductPerPage] = useState(12);
    const [currentPage, setCurrentPage] = useState(0);

    const indexOfLastProducts = currentPage * productPerPage;
    const indexOfFirstProducts = indexOfLastProducts + productPerPage;
    const currentProducts = phones.slice(indexOfLastProducts, indexOfFirstProducts )
    return(
        <div className='d-flex flex-wrap gap-5 justify-content-between'>
        {currentProducts.map((product) => (
        <Product product={product} />
        ))}
        </div>
    );
}
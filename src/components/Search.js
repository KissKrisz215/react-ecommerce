import brands from '../data/brands'
import phones from '../data/phones';
import { nanoid } from 'nanoid';
import { CheckBox } from './CheckBox';
import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import { SearchContext } from '../contexts/SearchContext';

export function Search({ sorting, setSorting}){
    const {productsList, setProductsList} = useContext(ProductsContext)
    const {price, setPrice} = useContext(SearchContext);

    return(
       <div className='d-flex flex-column gap-3'>
        <div className="card">
        <div className="card-header fw-bold fs-3 py-3">
            Brands
        </div>
        <ul className="list-group list-group-flush">
        {
            brands.map((item) => {
            const numberOfItems =  phones.filter((product) => product.brand.toLowerCase() === item.toLowerCase()).length;
            return(
            <li key={nanoid()} className="list-group-item fs-5 d-flex gap-2">
            <CheckBox  product={item} />
            <div className='d-flex gap-1'>
            <p>{item[0].toUpperCase() + item.slice(1)}</p>
            <p>({numberOfItems})</p>
            </div>
            </li>
            );
        })}
        </ul>
        </div>
        <div>
        <div className="card">
        <div className="card-header fw-bold fs-3 py-3 d-flex gap-3 text-dark">
            Price
            <div>
            {price ? null : <button className='btn btn-primary'>Remove Filters</button>}
            </div>
        </div>
        <ul className="list-group list-group-flush">
       <li className="list-group-item fs-5">
       <input type="radio" name="sort" id="ascending" className='sort-btn' />
        <label htmlFor="ascending">Low to high</label>
        </li>
        <li className="list-group-item fs-5"> 
        <input type="radio" name="sort" id="descending" className='sort-btn'  />
        <label htmlFor="descending">High to low</label>
        </li>
        </ul>
        </div>
        </div>
       </div>
    );
}
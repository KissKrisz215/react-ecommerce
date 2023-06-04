import brands from '../data/brands'
import phones from '../data/phones';
import { nanoid } from 'nanoid';
import { CheckBox } from './CheckBox';
import { useContext, useEffect } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import { SearchContext } from '../contexts/SearchContext';

export function Search({ sorting, setSorting}){
    const {productsList, setProductsList} = useContext(ProductsContext)
    const {sort,setSort} = useContext(SearchContext);
    console.log(sort);

    const removeSort = () => {
        setSort(null);
    }

    const sortProducts = (event) => {
        if(event.target.value === 'true'){
            setSort(true);
        }else if(event.target.value === 'false'){
            setSort(false)
        }
    }

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
            {sort === null ? null : <button className='btn btn-primary' onClick={removeSort}>Remove Filters</button>}
            </div>
        </div>
        <ul className="list-group list-group-flush">
       <li className="list-group-item fs-5">
       <input onChange={(event) => sortProducts(event)} type="radio" value={true} name="sort" id="ascending" className='sort-btn' checked={sort === true ? true : false} />
        <label htmlFor="ascending">Low to high</label>
        </li>
        <li className="list-group-item fs-5"> 
        <input onChange={(event) => sortProducts(event)} type="radio" value={false} name="sort" id="descending" className='sort-btn' checked={sort === false ? true : false}  />
        <label htmlFor="descending">High to low</label>
        </li>
        </ul>r
        </div>
        </div>
       </div>
    );
}
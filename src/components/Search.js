import brands from '../data/brands'
import { nanoid } from 'nanoid';

export function Search(){
    return(
       <div className='d-flex flex-column gap-3'>
        <div className="card">
        <div className="card-header fw-bold fs-3 py-3">
            Brands
        </div>
        <ul class="list-group list-group-flush">
        {brands.map((item) => (
            <li key={nanoid()} className="list-group-item fs-5 d-flex gap-2">
            <input type="checkbox" className="brand-check" />
            <div>
            {item[0].toUpperCase() + item.slice(1)}
            </div>
            </li>
        ))}
        </ul>
        </div>
        <div>
        <div className="card">
        <div className="card-header fw-bold fs-3 py-3">
            Price
        </div>
        <ul class="list-group list-group-flush">
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
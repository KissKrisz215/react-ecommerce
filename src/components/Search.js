import brands from '../data/brands'
import { nanoid } from 'nanoid';

export function Search(){
    return(
       <div>
        <div className="card">
        <div className="card-header fw-bold fs-3">
            Brands
        </div>
        <ul class="list-group list-group-flush">
        {brands.map((item) => (
            <li key={nanoid()} className="list-group-item">{item}</li>
        ))}
        </ul>
        </div>
       </div>
    );
}
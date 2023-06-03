import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export function ProductDetail({product}){
    product = product[0];
    
    return(
        <div className="container py-5">
          <div className="row border border-2 rounded-2">
            <div className="col-5 py-5">
                <img className="product-cover" src={product.images[0]} alt={product.title} />
            </div>
            <div className="col-7 py-5 border px-5">
                <h1>{product.title}</h1>
                <p className="fs-2 fw-bold text-yellow">${product.price.toFixed(2)}</p>
                <div>
                    <p className="fw-bold">Description</p>
                    <p>{product.description}</p>
                </div>
                <div>
                    <p className="fw-bold">Brand</p>
                    <p>{product.brand}</p>
                </div>
                <div>
                    <p className="fw-bold">Size</p>
                    <p>{product.size}</p>
                </div>
                <div>
                    <p className="fw-bold">Camera</p>
                    <p>{product.camera}</p>
                </div>
                <div>
                    <p className="fw-bold">CPU</p>
                    <p>{product.cpu}</p>
                </div>
                <div>
                    <p className="fw-bold">Memory</p>
                    <p>{product.memory}</p>
                </div>
                <div>
                    <p className="fw-bold">Display</p>
                    <p>{product.display}</p>
                </div>
                <div>
                    <p className="fw-bold">Battery</p>
                    <p>{product.battery}</p>
                </div>
                <div>
                    <button className='btn btn-outline-primary fs-4'><FontAwesomeIcon className="fs-5" icon={faCartShopping} /> Add To Cart</button>
                </div>
            </div>
          </div>
        </div>
    );
}
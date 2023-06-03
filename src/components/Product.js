import { Link } from "react-router-dom";

export function Product({product}){
    return(
      <div  style={{width: "300px"}}>
      <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">
        <div className="border p-3 py-5 rounded-2 d-flex flex-column align-items-center product-container">
            <img src={product.images[0]} className="card-img-top product-image mb-4" alt="..." />
            <div className="card-header">
            <Link className="text-decoration-none fw-bold" to={`/products/${product.id}`} >{product.title}</Link>
            </div>
            <div className="card-body pb-4">
                <p className="fs-4 fw-bold">${product.price.toFixed(2)}</p>
                <p className="card-text">{product.description}</p>
            </div>
            <button className=" btn btn-lightblue d-none">Add To Cart</button>
            </div>
            </Link>
      </div>
    );
}
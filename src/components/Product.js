import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function Product({product}){
  const {setCart, addToCart} = useContext(CartContext);

    return(
      <div className="product-list product-container border"  style={{width: "300px"}}>
      <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">
        <div className=" p-3 py-1 rounded-2 d-flex flex-column align-items-center">
            <img src={product.images[0]} className="card-img-top product-image mb-4" alt="..." />
            <div className="card-header">
            <h5 className="text-primary">{product.title}</h5>
            </div>
            <div className="card-body">
                <p className="fs-4 fw-bold">${product.price.toFixed(2)}</p>
                <p className="card-text">{product.description}</p>
            </div>
            </div>
            </Link>
            <div className="d-flex justify-content-center py-3">
            <button onClick={() => addToCart(product)} className=" btn btn-lightblue d-none">Add To Cart</button>
            </div>
      </div>
    );
}
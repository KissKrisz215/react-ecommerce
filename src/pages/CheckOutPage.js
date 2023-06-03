import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from "@fortawesome/free-solid-svg-icons";

export function CheckOutPage(){

    const {cart, changeCart, deleteProduct, finalPrice} = useContext(CartContext)

    return(
        <div>
            <Navbar />
            {cart.length === 0 && 
            <div className="text-center">
            <h1 className="text-muted">Please Add Items To Your Cart</h1>
            <FontAwesomeIcon className="icon-large" icon={faBan} />
            </div>
             }
            <div className="d-flex flex-column gap-3 align-items-around container checkout-cart vh-85 my-4">
             {cart.map((item) => (
                <div key={item.id} className=" w-100 cart-card d-flex border gap-3 py-3">
                <img  src={item.images[0]} alt="Card image cap" style={{width:"150px"}} />
                <div>
                     <h5>{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <div>
                    <label className="fw-bold me-2 fs-5" htmlFor="">Quantity:</label>
                    <input onChange={(event) => changeCart(event,item.id)} type="number"  style={{width: "80px"}} value={item.quantity} />
                    <p className="fw-bold fs-5 mt-2">Price: <span className="text-yellow fs-3">${(item.quantity * item.price).toFixed(0)}</span></p>
                    </div>
                </div>
                <div className="w-50 d-flex justify-content-end align-items-center px-5">
                <div>
                    <button  onClick={() => deleteProduct(item.id)} className="btn btn-danger fs-5"> Delete</button>
                    </div>
                </div>
                </div>
             ))}
             <div>
                {finalPrice && <h5 className="fs-2 fw-bold text-end">Final Balance: {finalPrice && <span className="text-yellow fs-2">${finalPrice.toFixed(0)}</span>}</h5>}
             </div>
             </div>
            <Footer />
        </div>
    );
}
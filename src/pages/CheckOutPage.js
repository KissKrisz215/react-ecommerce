import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function CheckOutPage(){

    const {cart} = useContext(CartContext)

    console.log(cart);
    return(
        <>
            <Navbar />
            {cart.length === 0 && <h1>Your Cart is Empty .....</h1>}
            <div className="d-flex flex-column gap-3 align-items-around container">
             {cart.map((item) => (
                <div key={item.id} className=" w-100 cart-card d-flex border gap-3 py-3">
                <img  src={item.images[0]} alt="Card image cap" style={{width:"100px"}} />
                <div className="">
                     <h5>{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <div>
                    <label className="fw-bold me-2 fs-5" htmlFor="">Quantity:</label>
                    <input type="number"  style={{width: "80px"}} value={item.id} />
                    </div>
                </div>
                <div className="w-50 d-flex justify-content-end align-items-center px-5">
                <div>
                    <button className="btn btn-danger fs-5"> Delete</button>
                    </div>
                </div>
                </div>
             ))}
             </div>
            <Footer />
        </>
    );
}
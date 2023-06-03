
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export function Navbar(){

    const {cart} = useContext(CartContext);

    return(
        <div className="container-fluid bg-dark">

             <div className="container p-1">
                <nav className="navbar navbar-expand">
                    <Link to="/" className="navbar-brand text-white fs-4">Ecommerce</Link>
                    <div className="collapse navbar-collapse  d-flex justify-content-end">
                    <ul className="navbar-nav">
                    <li>
                    <Link to="/cart" className='text-decoration-none d-flex gap-2 align-items-center'>
                        <FontAwesomeIcon icon={faCartShopping} className='text-white' />
                        <span className='text-white fs-5'>Cart ({cart.length})</span>
                    </Link>
                        </li>
                    </ul>
                    </div>
                </nav>
             </div>
        </div>
    );
}
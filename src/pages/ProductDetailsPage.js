import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProductDetail } from "../components/ProductDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import phones from '../data/phones'

export function ProductDetails(){

    const {id} = useParams();
    const [product,setProduct] = useState(null);


    useEffect(() => {
     const product = phones.filter((item) => Number(item.id) === Number(id));
     setProduct(product);
    }, []);

    return(
       <div>
        <Navbar />
        {product && <ProductDetail product={product} />}
        <Footer />
       </div>
    );
}
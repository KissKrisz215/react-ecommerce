import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProductDetail } from "../components/ProductDetail";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";

export function ProductDetails(){
    const {productsList, setProductsList} = useContext(ProductsContext)
    const {id} = useParams();
    const [product,setProduct] = useState(null);


    useEffect(() => {
     const product = productsList.filter((item) => Number(item.id) === Number(id));
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
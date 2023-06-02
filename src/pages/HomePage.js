import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {ProductsList} from '../components/ProductsList'

export function HomePage(){
    return(
        <>
            <Navbar />
            <ProductsList />
            <Footer />
        </>
    );
}
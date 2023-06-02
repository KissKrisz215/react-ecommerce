import { Products } from "./Products";
import { Search } from "./Search";
import { Layout } from "./Layout"

export function ProductsList(){
    return(
       <div className="d-flex gap-2">
         <Search />
        <div>
         <Layout />
         <Products />
         </div>
       </div>
    );
}
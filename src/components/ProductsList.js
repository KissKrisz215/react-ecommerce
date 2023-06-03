import { Products } from "./Products";
import { Search } from "./Search";
import { Layout } from "./Layout"
import { useState } from "react";

export function ProductsList(){

  const [layout, setLayout] = useState(true);

    return(
       <div className="d-flex gap-5 container my-5">
         <Search />
        <div className="w-100 d-flex flex-column gap-4">
         <Layout layout={layout} setLayout={setLayout} />
         <Products />
         </div>
       </div>
    );
}
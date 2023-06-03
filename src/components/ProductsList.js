import { Products } from "./Products";
import { Search } from "./Search";
import { Layout } from "./Layout"
import { useState } from "react";
import brands from "../data/brands";

export function ProductsList(){

  const [layout, setLayout] = useState(true);
  const [searchValue, setSearchValue] = useState([]);
  const [sorting, setSorting] = useState(null);

    return(
       <div className="d-flex gap-5 container my-5">
         <Search sorting={sorting} setSorting={setSorting} searchValue={searchValue} setSearchValue={setSearchValue}  />
        <div className="w-100 d-flex flex-column gap-4">
         <Layout layout={layout} setLayout={setLayout} />
         <Products searchValue={searchValue} setSearchValue={setSearchValue} />
         <div className="d-flex justify-content-end">
         <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-light bg-transparent border">Previous</button>
          <button type="button" className="btn btn-primary border">1</button>
          <button type="button" className="btn btn-light bg-transparent border text-primary">2</button>
          <button type="button" className="btn btn-light bg-transparent border">Next</button>
        </div>
         </div>
         </div>
       </div>
    );
}
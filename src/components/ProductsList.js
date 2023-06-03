import { Products } from "./Products";
import { Search } from "./Search";
import { Layout } from "./Layout"
import { useState } from "react";
import brands from "../data/brands";
import phones from "../data/phones";
import { LayoutProvider } from "../contexts/LayoutContext";

export function ProductsList(){
  const [searchValue, setSearchValue] = useState([]);
  const [sorting, setSorting] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [productsPages, setProductsPages ] = useState(Array.from({length: Math.ceil(phones.length / 12)}, (_, index) => index + 1));

  const changePage = (page) => {
    if(page === "prev" && (currentPage - 1 >= 0) === true){
      setCurrentPage((prevValue) => prevValue - 1);
    }else if(page === "next" && (currentPage + 1) <= productsPages.length - 1){
      setCurrentPage((prevValue) => prevValue + 1);
    }else if(page === "next" && ((currentPage + 1) > productsPages.length - 1) === true || page === "prev" && (currentPage - 1 > 1) === false){
      setCurrentPage((prevPage) => prevPage)
    }else{
      setCurrentPage(page);
    }
  }

    return(
      <LayoutProvider>
       <div className="d-flex gap-5 container my-5">
         <Search sorting={sorting} setSorting={setSorting} searchValue={searchValue} setSearchValue={setSearchValue}  />
        <div className="w-100 d-flex flex-column gap-4">
         <Layout />
         <Products searchValue={searchValue} setSearchValue={setSearchValue} currentPage={currentPage} productsPages={productsPages} />
         <div className="d-flex justify-content-end">
         <div className="btn-group" role="group" aria-label="Basic example">
          <button onClick={() => changePage("prev")} type="button" className={currentPage + 1 === productsPages[0] ? "btn btn-light bg-transparent border" : "btn btn-primary border"}>Previous</button>
          {productsPages.map((item,index) => {
            return(
              <button key={item} onClick={() => changePage(item - 1)} type="button" className={currentPage === item - 1 ? "btn btn-primary border" : "btn btn-light border" }>{item}</button>
            );
          })}
          <button onClick={() => changePage("next")} type="button" className={currentPage + 1 === productsPages[productsPages.length - 1] ? "btn btn-light bg-transparent border" : "btn btn-primary border"}>Next</button>
        </div>
         </div>
         </div>
       </div>
       </LayoutProvider>
    );
}
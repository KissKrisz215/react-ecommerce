import { Products } from "./Products";
import { Search } from "./Search";
import { Layout } from "./Layout"
import { useEffect, useState } from "react";
import brands from "../data/brands";
import { LayoutProvider } from "../contexts/LayoutContext";
import { ProductsContext } from "../contexts/ProductsContext"
import { useContext } from "react";
import { SearchProvider } from "../contexts/SearchContext";

export function ProductsList(){
  const {productsList, setProductsList} = useContext(ProductsContext)
  const [sorting, setSorting] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [productsPages, setProductsPages ] = useState(Array.from({length: Math.ceil(productsList.length / 12)}, (_, index) => index + 1)); 

   useEffect(() => {
    setProductsPages(Array.from({length: Math.ceil(productsList.length / 12)}, (_, index) => index + 1))
   }, [productsList]);

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
      <SearchProvider>
       <div className="d-flex gap-5 container my-5">
         <Search sorting={sorting} setSorting={setSorting}  />
        <div className="w-100 d-flex flex-column gap-4">
         <Layout />
         <Products currentPage={currentPage} productsPages={productsPages} />
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
       </SearchProvider>
       </LayoutProvider>
    );
}
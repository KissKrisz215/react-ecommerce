import { useState, useEffect } from "react";
import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

export function CheckBox({product,setSearchValue,searchValue}){
    const {search, setSearch, filterProducts} = useContext(SearchContext)


    const handleIsChecked = (event) => {
      const isChecked = event.target.checked;
      const name = event.target.name;
      const arrayCopy = [...search];
      if (isChecked === false) {
        const filteredArray = arrayCopy.filter((item) => item !== name);
        setSearch(filteredArray);
      } else if (isChecked === true && arrayCopy.includes(name) === false) {
        arrayCopy.push(name);
        setSearch(arrayCopy);
      }
    }

    return(
        <>
    <input onChange={(event) => handleIsChecked(event)} name={product} type="checkbox" className="brand-check" checked={search.includes(product) ? true : false}/>
        </>
    );
}
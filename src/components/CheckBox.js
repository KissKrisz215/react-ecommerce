import { useState, useEffect } from "react";

export function CheckBox({product,setSearchValue,searchValue}){

    const [isChecked, setIsChecked] = useState(true);

    const handleIsChecked = (event) => {
      setIsChecked(!isChecked);
      // console.log(isChecked);
      const name = event.target.name;
      const arrayCopy = [...searchValue];
      if(isChecked === false){
        const filteredArray = arrayCopy.filter((item) => item !== name);
        setSearchValue(filteredArray);
      }else if(isChecked === true && arrayCopy.includes(name) === false){
       arrayCopy.push(name);
       setSearchValue(arrayCopy);
      }
    console.log(searchValue);
    }

    return(
        <>
    <input onChange={(event) => handleIsChecked(event)} name={product} type="checkbox" className="brand-check" checked={isChecked} />
        </>
    );
}
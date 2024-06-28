import React, { useEffect, useReducer, useState } from 'react'
import jsonData from './Categories_Products_Subproducts.json';
import './ProductsRow.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import CategoryComponenet from './CategoryComponenet';


const ProductsRow = () => {

    let[prodNum, setProdNum] = useState(1)
    let[categories, setCategories] = useState(false)
    let[catCheck, setCatCheck] = useState(false)

    let dataFunc = (set) => {
        setCatCheck(set)
        // console.log(set);
    }

    console.log(categories);
    console.log(catCheck);

    console.log(categories || catCheck);

  return (
    <div id='products-container'>
        
            {jsonData.map(({product, image, id}) => {
                  return(
                    <div id='product-container' className='containers' onMouseEnter={() => {setProdNum(id); setCategories(true)}} onMouseLeave={() => {setProdNum(0); setCategories(false)}}>
                        <img src={image} alt="" />
                        <div id='product-container-sec'>
                            <h3>{product}</h3>
                            <button><RiArrowDropDownLine size={20} /></button>
                        </div>
                        
                    </div>
                  )
            })}

                {(categories || catCheck) && <CategoryComponenet CategoryID={prodNum} func={dataFunc} />}
            
    </div>
  )
}

export default ProductsRow

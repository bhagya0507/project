import React, { useEffect, useState } from 'react'
import './CategoryComponenet.css'
import jsonData from './Categories_Products_Subproducts.json';
import { RiArrowDropRightLine } from "react-icons/ri";

const CategoryComponenet = ({CategoryID, func}) => {
    let[categoriesStay, setCategoriesStay] = useState(true)

    let filteredData = jsonData.filter(({id}) => {
        return id == CategoryID
    })

    let categoryArray = filteredData[0]?.categories

    func(categoriesStay)

  return (
    <div className='component-constainer' id={`component-constainer-${CategoryID}`} onMouseEnter={() => {setCategoriesStay(true)}} onMouseLeave = {() => {setCategoriesStay(false)}}>
        {categoryArray?.map(({category}) => {
            return(
                <div id='category'>
                    <h5>{category}</h5>
                    <button><RiArrowDropRightLine size={20}/></button>
                </div>
            )
        })}
    </div>
  )
}

export default CategoryComponenet
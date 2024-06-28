import { IoChevronForward } from "react-icons/io5";
import InnerSubCategory from "./InnerSubCategory";
function Subcategory({ category }) {
// console.log(category);
    return (
        <ul className="subnav" >
            {category.map(({name, subCat}) => {
              let  subcatLen=subCat.length;
              console.log(subcatLen);
                return <a href="">
                    <div id="list"><li>{name}</li><i id="side"><IoChevronForward /></i></div>
                    {(subcatLen>0) && <InnerSubCategory innercategory={subCat}/>}
                </a>
            })}
        </ul>
    )
}
export default Subcategory 



import React, { useEffect, useRef } from "react";
// import { bgImages } from "./bgImages";
import "./Flipkart.css"
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import SubnavBar from "./SubnavBar";
import categories from "./Catogories.json"
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Subcategory from "./SubCategory";


function Flipkart() {
    let container3= useRef()
    
    
//    console.log(bgImages);
//     let i = 0;
//     function Navigate(e) {
//         console.log(e)
//         console.log(container3.current);
//         if (e.id == "btn2") {
//             i = (i + 1) % bgImages.length;
//         } else {
//             i = (i - 1 + bgImages.length) % bgImages.length
//         }
//         container3.current.style.backgroundImage=bgImages[i].img;
       
//     }
//     useEffect(()=>{
//         setInterval(()=>{
//             i=(i+1)%bgImages.length; 
//             // container3.style.backgroundImage=bgImages[i].img;
//         },4000)
//     },[])    
    return (
        <>
            <div id="MainContainer">  
                <div id="container1">
                    <img id="logo" className="subclass" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" height="50%" width="10%" alt="" title="Flipkart" />
                    <div id="searchDiv" className="subclass">
                        <div id="d1">
                            <div title="Search Icon"><CiSearch/></div>
                        </div>
                        <div id="d2">
                            <input type="search" placeholder=" Search for Products, Brands and More" title="Search for Products, Brands and More" />
                        </div>
                    </div>
                    <div id="div1" className="subclass" >
                        <div id="has-subnavDIV">
                            <ul className="nav">
                                <li className="has-subnav">
                                    <div id="subDiv1">
                                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg" alt="" />
                                        <span>Login</span>
                                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K" alt="" />
                                    </div>
                                    <SubnavBar category={categories.Login}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="div2" className="subclass" title="Cart">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg" alt="" />
                        <span> Cart</span>
                    </div>
                    <div id="div3" className="subclass" title="Become a Seller">
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="" />
                        <span> Become a Seller</span>
                    </div>
                    <div id="div4" className="subclass">
                        <div>
                        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" alt="" />
                        </div>
                        <SubnavBar category={categories.hamBurger} />
                    </div>
                </div>
                <div id="container2">
                    <div id="box1" className="category">
                        <img src="https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100" alt="" />
                        <span>Grocery</span>
                    </div>
                    <div id="box2" className="category">
                        <img src="https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" alt="" />
                        <span>Mobiles</span>
                    </div>
                    <div id="box3" className="category">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" alt="" />
                        <div><span>Fashion</span><i className="icon"><IoIosArrowDown/></i></div>
                         <Subcategory category={categories.Fashion} />
                    </div>
                    <div id="box4" className="category">
                        <img src="https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100" alt="" />
                        <div><span>Electronics</span><i className="icon"><IoIosArrowDown/></i></div>
                        <Subcategory category={categories.Electronics}/>
                    </div>
                    <div id="box5" className="category"                >
                        <img src="https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100" alt="" />
                        <div><span>Home& Furniture</span><i className="icon"><IoIosArrowDown/></i></div>
                        <Subcategory category={categories["Home&Furniture"]}/>
                    </div>
                    <div id="box6" className="category">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100" alt="" />
                        <span>Appliences</span>
                    </div>
                    <div id="box7" className="category">
                        <img src="https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" alt="" />
                        <span>Travel</span>
                    </div>
                    <div id="box8" className="category">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100" alt="" />
                        <div><span>Beauty Toys and More</span><i className="icon"><IoIosArrowDown/></i></div>
                        <Subcategory category={categories.BeautyToys}/>
                    </div>
                    <div id="box9" className="category">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100" alt="" />
                        <div><span>Two Wheelers</span><i className="icon"><IoIosArrowDown/></i></div>
                        <Subcategory category={categories.TwoWheelers}/>
                    </div>
                </div>
                <div id="container3" style={{backgroundImage: "url('https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/d05c680ac784bef4.png?q=20')"}} ref={container3}>
                    <div id="container3_div1">
                        <div><button className="btn" id="btn1" ><IoChevronBack /></button></div>
                        <div><button className="btn" id="btn2" ><IoChevronForward /></button></div>
                    </div>
                    <div id="container3_div2">
                        <div id="SlidebarDiv">
                            <div id="innerDiv">
                                <div className="ImageDot"><i className="fa-duotone fa-circle"></i></div>
                                <div className="ImageDot"><i className="fa-duotone fa-circle"></i></div>
                                <div className="ImageDot"><i className="fa-duotone fa-circle"></i></div>
                                <div className="ImageDot"><i className="fa-duotone fa-circle"></i></div>
                                <div className="ImageDot"><i className="fa-duotone fa-circle"></i></div>
                                <div className="ImageDot"><i className="fa-duotone fa-circle"></i></div>
                                <div className="ImageDot"><i className="fa-duotone fa-circle"></i></div>
                                <div className="ImageDot"><i className="fa-duotone fa-circle"></i></div>
                                <div className="ImageDot"><i className="fa-duotone fa-circle"></i></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
 
export default Flipkart
import React from 'react'
import './ShoppingWebsiteNavBar.css'
import { FaSearch } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

const ShoppingWebsiteNavBar = () => {
  return (
    <div>
      <nav className="navbar">
      <section className="navbar-section">
        <div className="navbar-section-logo-search-div">
          <div className="navbar-section-logo-div">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              alt=""
            />
          </div>
          <div className="navbar-section-search-div">
            <button id="search-button">
              <FaSearch size={15}/>
            </button>
            <input
              type="text"
              id="search-input"
              placeholder="Search for Products,Brand and More"
            />
          </div>
        </div>
        <div className="navbar-section-login-cart-seller-dots">
          <ul>
            <li>
              <div id="Login">
                <button><BsPersonCircle size={20} /></button>
                
                <h4>Login</h4>
                <button className='drop-btn'><RiArrowDropDownLine size={20} /></button>
                
              </div>
            </li>
            <li>
              <div id="cart">
                <img
                  src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                  alt=""
                />
                <h4>Cart</h4>
              </div>
            </li>
            <li>
              <div id="Become-a-Seller">
                <img
                  src="	https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
                  alt=""
                />
                <h4>Become a Seller</h4>
              </div>
            </li>
            <li>
              <div id="three-dots">
                <BsThreeDotsVertical size={20} />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </nav>
    </div>
  )
}

export default ShoppingWebsiteNavBar

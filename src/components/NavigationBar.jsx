import React, { useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import CartPanel from "./CartPanel";
import "../assets/css/navigationbar.css";

export default function NavigationBar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false)

  const toggleAboutUsDropdown = () => {
    setIsAboutUsOpen(!isAboutUsOpen);
  };

  const toggleBrowseDropDown = ()=>{
    setIsBrowseOpen(!isBrowseOpen)
 };


  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="navbar">
      <ul >
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li id="nav-about-us"  
          onMouseEnter={toggleBrowseDropDown} 
          onMouseLeave={toggleBrowseDropDown}
          >
               <Link to="/products/">BROWSE</Link>
          {isBrowseOpen && (
            <ul className="nav-dropdown-menu">
              <li>
                <a href="/products/categories/">SHIRTS</a>
              </li>
              <li>
                <a href="/products/categories/">PANTS</a>
              </li>
              <li>
                <a href="/products/categories/">HATS</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/best-sellers">BEST SELLERS</Link>
        </li>
        <li id="about-us"  
          onMouseEnter={toggleAboutUsDropdown} 
          onMouseLeave={toggleAboutUsDropdown}
        >
          <Link to="/about-us/">ABOUT US</Link>
          {isAboutUsOpen && (
            <ul className="nav-dropdown-menu">
              <li>
                <a href="#">Mission</a>
              </li>
              <li>
                <a href="#">Vision</a>
              </li>
              <li>
                <a href="#">Values</a>
              </li>
            </ul>
          )}
        </li>
        <li
          className="nav-cart"
          onMouseEnter={toggleCartDropdown}
          onMouseLeave={toggleCartDropdown}
        >
          <Link to="/cart" className="nav-cart-link">
            CART🛒 
          </Link>
          {isCartOpen && <CartPanel />}
        </li>
      </ul>
    </nav>
  );
}

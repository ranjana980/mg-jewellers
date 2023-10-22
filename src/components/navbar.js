// Navbar.js

import React from 'react';
import logo from '../assets/image/jewellery-logo.png'

function Navbar() {
  return (
    <nav className="navbar ">
      <div className="container xs:!pl-[0px]">
        <a href="/" className="navbar-logo">
         <img src={logo} height={50} width={50} className="h-100" />
        </a>
        
        <ul className="nav-menu lg:mt-2">
          <li className="nav-item xs:hidden lg:block">
            <a href="/products" className="nav-link">
              Products
            </a>
          </li>
          <li className="nav-item xs:hidden lg:block">
            <a href="/about" className="nav-link">
              About Us
            </a>
          </li>
          <li className="nav-item xs:hidden lg:block">
            <a href="/contact" className="nav-link">
              Contact Us
            </a>
          </li>
          {/* You can add more navigation links as needed */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

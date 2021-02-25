import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import Header from "../Header/Header";

const MenuItem = ({children}) => (
    <div>
          <div className="menuItem">
    <Header color="red" fontSize={32} fontWeight="bold">
    {children}
  </Header>
    </div>

    </div>
  


)
 
const Navbar = () => {
  return (
    <div className="navbar">
        <MenuItem>Logo</MenuItem>
        <MenuItem>Shop</MenuItem>
        <MenuItem>Cart</MenuItem>
        <MenuItem>Login</MenuItem>

      
    
      
      {/* <menuItem>LOGO</menuItem>
      <menuItem>SHOP</menuItem>
      <menuItem>CART</menuItem>
      <menuItem>LOGIN</menuItem> */}
    </div>
  );
};

export default Navbar;

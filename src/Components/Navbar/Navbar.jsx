import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { connect } from "react-redux";
import { signout } from "../../Redux/auth/authActions";

const MenuItem = ({ children, to="#", ...restProps }) => (
  <div>
    <div {...restProps} className="menuItem">
      <Link to={to}>
        <Header color="red" fontSize={32} fontWeight="bold">
          {children}
        </Header>
      </Link>
    </div>
  </div>
);

const Navbar = ({auth,signout}) => {
  return (
    <div className="navbar">
      <MenuItem to="/" >Logo</MenuItem>
      <MenuItem to="categories">Shop</MenuItem>
      <MenuItem>Cart</MenuItem>

      { auth ? <MenuItem to="authentication" onClick={signout}>LogOut</MenuItem> : <MenuItem to="authentication">LogIn</MenuItem>}

     
    </div>
  );
};

var mapState=(state)=>({
  auth:state.auth

})


var actions={
  signout  
}
export default connect(mapState,actions)(Navbar);

import React from "react";
import "./components.css";
import * as BsIcons from "react-icons/bs";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="nav">
        <div className="logo">
          <BsIcons.BsShop size={50}/>
          <span>TokoKu</span>
        </div>
        <div className="nav-link">
            <NavLink to=""><p>Home</p></NavLink>
            <NavLink to=""><p>Product</p></NavLink>
            <NavLink to=""><p>About</p></NavLink>
        </div>
        <div className="">
            <Button className="btn-signup">SignUp</Button>
            <Button className="btn-login">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
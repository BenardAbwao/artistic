import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
          <h1 className="logo">The Art</h1> 
        <ul className="nav-links">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/inspirations"}>Inspirations</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>Contact Us</NavLink>
          </li>
          <li>
            <NavLink to={"blog"}>Blog</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
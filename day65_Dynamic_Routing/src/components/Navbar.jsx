import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="nav_bar">
        <div className="left"></div>
        <div className="right">
          <Link to={'/'} className="items">Home</Link>
          <Link to={'/product'} className="items">Products</Link>
          <Link to={'/contact'} className="items">Contacts</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

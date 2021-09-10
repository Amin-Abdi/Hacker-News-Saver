import React from "react";
import { Link } from "react-router-dom";
import { FaHackerNews } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-head">
        <FaHackerNews className="logo" />
      </div>
      <div>
        <Link to="/saved" className="singleLink">
          Saved Posts
        </Link>
        <Link to="/" className="singleLink">
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

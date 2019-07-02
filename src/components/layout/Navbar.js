import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary ">
      <div className="d-flex flex-row">
        <FaGithub
          className="text-white my-auto mr-1"
          style={{ fontSize: "1.7rem" }}
        />{" "}
        <p className="navbar-brand display-6 my-auto">Github Finder</p>
      </div>
      <div>
        <ul className="navbar-nav d-flex flex-row justify-content-between">
          <li className="nav-item mr-2">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

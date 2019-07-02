import React from "react";
import Icon from "../../assets/gitIcon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary ">
      <div className="d-flex flex-row">
        <img
          style={{
            height: "30px",
            display: "block",
            margin: "auto 5px auto 0"
          }}
          src={Icon}
          alt="Github"
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

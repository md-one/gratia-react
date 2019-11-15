import React from "react";
import "./style/homeNav.scss";
import logo from "./style/icons/logo.png";
import { Link } from "react-router-dom";

class homeNav extends React.Component {
  state = {};
  render() {
    return (
      <nav id="homeNav">
        <div class="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default homeNav;

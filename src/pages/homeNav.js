import React from "react";
import "./style/homeNav.scss";
import logo from "./style/icons/logo.png";

class homeNav extends React.Component {
  state = {};
  render() {
    return (
      <nav id="homeNav">
        <div class="logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default homeNav;

import React from "react";
import "./style/nav.scss";
import logo from "./style/icons/logo.png";

class nav extends React.Component {
  state = {};
  render() {
    return (
      <nav>
        <div class="logo">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <ul>
          <li>
            <a href="/home">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default nav;

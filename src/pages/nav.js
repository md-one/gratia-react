import React from "react";
import "./style/nav.scss";

class nav extends React.Component {
  state = {};
  render() {
    return (
      <nav>
        <div class="logo">
          <img src="src/icons/logo.png" alt="" />
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
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default nav;

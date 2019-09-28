import React from "react";
import "./style/footer.scss";
import logo from "./style/icons/logo.png";

class footer extends React.Component {
  state = {};
  render() {
    return (
      <footer>
        <div class="logo">
          <img src={logo} alt="" />
          <hr />
        </div>
        <div class="text">
          <h2>Gratia Restaurant</h2>
          <p>Copyright 2016. All rights reserved by symu</p>
        </div>
        <div class="SM">
          <img src={"../../icons/TR.png"} alt="" />
          <img src="../../icons/TR.png" alt="" />
          <img src="../icons/IG.png" alt="" />
        </div>
      </footer>
    );
  }
}

export default footer;

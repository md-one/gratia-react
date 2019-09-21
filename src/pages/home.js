import React from "react";
import "./style/home.scss";
import "./style/title.scss";

class home extends React.Component {
  state = {};
  render() {
    return (
      <main>
        <header></header>
        <div class="title">
          <h3>Gratia</h3>
          <h2>PERFECTION</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <section>
          <div class="box">
            <div class="overlay"></div>
            <div class="text">
              <h2>BREAKFAST</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="box">
            <div class="overlay"></div>
            <div class="text">
              <h2>BREAKFAST</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="box">
            <div class="overlay"></div>
            <div class="text">
              <h2>BREAKFAST</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <h2>CHECK OTHER OFFERS</h2>
        </section>
      </main>
    );
  }
}

export default home;

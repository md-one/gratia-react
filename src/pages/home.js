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
          <h3 className="home">Gratia</h3>
          <h2>PERFECTION</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <section id="muneIntroduction">
          <div class="box">
            <div class="overlay"></div>
            <div class="text">
              <h2>DESSERTS</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="box">
            <div class="overlay"></div>
            <div class="text">
              <h2>SMOOTHIES</h2>
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
        <section id="details">
          <div class="whiteBoard">
            <div className="container">
              <h2>DETAILS</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button>PREPARATION OF OUR DISHES</button>
            </div>
          </div>
        </section>
        <div class="title">
          <h3 className="home">Gratia</h3>
          <h2>PERFECTION</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <section id="weTheBest">
          <div className="box">
            <div className="text">
              <h2>THE BEST CHEFF'S</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="box">
            <div className="text">
              <h2>7 DIFFRENT LOCATIONS</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="box">
            <div className="text">
              <h2>FRESH PRODUCTS</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default home;

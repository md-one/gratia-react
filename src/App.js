import React from "react";
import { BrowserRouter, Switsh, Route } from "react-router-dom";
import "./App.css";
import Nav from "./pages/nav";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Test from "./pages/test";
import Footer from "./pages/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/menu/:category" component={Test} />
          {/*<Route path="/menu/catgory/:" component={themeal} />*/}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Switsh, Route } from "react-router-dom";
import "./App.css";
import Nav from "./pages/nav";
import Homenav from "./pages/homeNav";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Test from "./pages/test";
import DessertsMenu from "./pages/dessertsMenu";
import MainMenu from "./pages/mainMenu";
import SaladsMenu from "./pages/saladsMenu";

import Details from "./pages/details";
import Footer from "./pages/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Route path="/" exact component={Homenav} />
          <Route path="/home" exact component={Homenav} />
          <Route path="/menu" component={Nav} />

          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/menu" exact component={Menu} />

          <Route path="/menu/Desserts" exact component={DessertsMenu} />
          <Route path="/menu/Desserts/:title" exact component={Details} />
          <Route path="/menu/Salads" exact component={SaladsMenu} />
          <Route path="/menu/Main_Dishes" exact component={MainMenu} />

          {/*<Route path="/menu/:title" exact component={Details} />*/}
          {/*<Route path="/menu/catgory/:" component={themeal} />*/}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./pages/nav";
import Homenav from "./pages/homeNav";
import Home from "./pages/home";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import DessertsMenu from "./pages/dessertsMenu";
import BreakfastMenu from "./pages/breakfastMenu";
import MainMenu from "./pages/mainMenu";
import SaladsMenu from "./pages/saladsMenu";
import SoupsMenu from "./pages/soupsMenu";
import SandwichMenu from "./pages/sandwichMenu";

import Details from "./pages/details";
import Footer from "./pages/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Switch>
            <Route path="/" exact component={Homenav} />
            <Route path="/home" exact component={Homenav} />
            <Route path="/menu" component={Nav} />
            <Route path="/contact" component={Nav} />
          </Switch>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
          <Route path="/menu/Desserts" exact component={DessertsMenu} />
          <Route path="/menu/Desserts/:title" exact component={Details} />
          <Route path="/menu/Breakfast" exact component={BreakfastMenu} />
          <Route path="/menu/Breakfast/:title" exact component={Details} />
          <Route path="/menu/Salads" exact component={SaladsMenu} />
          <Route path="/menu/Salads/:title" exact component={Details} />
          <Route path="/menu/Main_Dishes" exact component={MainMenu} />
          <Route path="/menu/Main_Dishes/:title" exact component={Details} />
          <Route path="/menu/Soups" exact component={SoupsMenu} />
          <Route path="/menu/Soups/:title" exact component={Details} />
          <Route path="/menu/Sandwich" exact component={SandwichMenu} />
          <Route path="/menu/Sandwich/:title" exact component={Details} />

          {/*<Route path="/menu/:title" exact component={Details} />*/}
          {/*<Route path="/menu/catgory/:" component={themeal} />*/}
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

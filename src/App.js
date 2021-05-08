import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./components/header/Header.component";
import "./css/App.css";
//Home Page
import HomePage from "./pages/homepage/homepage.components";
//Shop Page
import ShopPage from "./pages/shop/shop.compnents.jsx";

//sign in
import signInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={signInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;

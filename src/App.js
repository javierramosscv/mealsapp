import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import NavegationBar from "./components/layout/NavegationBar";
import Home from "./pages/Home";
import MealDetail from "./pages/MealDetail";
import MealList from "./pages/MealList";

import CartProvider from "./store/CartProvider";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <NavegationBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/mealList/:idCategory" exact>
            <MealList />
          </Route>
          <Route path="/mealDetail/:idMeal" exact>
            <MealDetail />
          </Route>
        </Switch>
      </div>
    </CartProvider>
  );
}

export default App;

import React, { Fragment, useContext, useState } from "react";
import CartIcon from "../cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
//import { useHistory } from "react-router";
import CartContext from "../../store/Cart-context";
import Popup from "./Popup";
import Cart from "../cart/Cart";
const HeaderCartButton = (props) => {
  const [flat, setFlat] = useState(false);
  //Inicializa el useContext agregandole el Context definido en CartContext
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const toggleFlat = () => {
    setFlat(!flat);
  };
  return (
    <Fragment>
      <button className={classes.button} onClick={toggleFlat}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
      <Popup flat={flat} onClose={toggleFlat}>
        <Cart />
      </Popup>
    </Fragment>
  );
};

export default HeaderCartButton;

import React, { Fragment, useContext, useState } from "react";

import classes from "./Meal.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/Cart-context";
import Popup from "../layout/Popup";
import MealDetail from "../../pages/MealDetail";
const Meal = (props) => {
  const [flat, setFlat] = useState(false);
  const cartContext = useContext(CartContext);
  const addItemToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price,
    });
  };
  const toggleFlat = () => {
    setFlat(!flat);
  };

  return (
    <Fragment>
      <div className={classes.itemContainer}>
        <div className={classes.imagen}>
          <img src={props.meal.imageThumb + "/preview"} alt="" />
        </div>
        <div className={classes.content}>
          <div className={classes.title}>
            <div>{props.meal.name.substr(0, 30)}</div>
          </div>
          <div className={classes.price}>
            <div>Price: ${props.meal.price}</div>
          </div>
          <div></div>
        </div>
        <div className={classes.itemformcontainer}>
          <div>
            <button onClick={toggleFlat}>View&nbsp;Detail</button>
          </div>
          <div className={classes.itemform}>
            <MealItemForm onAddtoCart={addItemToCartHandler} />
          </div>
          <div className={classes.message}></div>
        </div>
      </div>
      <Popup flat={flat} onClose={toggleFlat}>
        <MealDetail idMeal={props.meal.id}></MealDetail>
      </Popup>
    </Fragment>
  );
};

export default Meal;

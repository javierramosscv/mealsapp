import React, { Fragment } from "react";
import Meal from "./Meal";
import classes from "./MealsList.module.css";

const MealsList = (props) => {
  return (
    <Fragment>
      <div className={classes.mealscontainer}>
        {props.list.map((element) => (
          <Meal key={element.id} meal={element} />
        ))}
      </div>
    </Fragment>
  );
};

export default MealsList;

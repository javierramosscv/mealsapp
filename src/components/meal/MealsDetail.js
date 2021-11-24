import React from "react";
import Card from "../ui/Card";
import classes from "./MealsDetail.module.css";

const MealsDetail = (props) => {
  return (
    <div>
      <Card>
        <div className={classes.image}>
          <img src={props.meal.imagenPath} alt={props.meal.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.meal.name}</h3>
          <div className={classes.information}>
            <div className={classes.infoDetail}>
              <div className={classes.infoCategory}>
                <span>Category: {props.meal.category} </span>
              </div>
              {
                //<div className={classes.infoTags}>
                // <span>Tags: {props.meal.tags} </span>
                //</div>
              }
              <div className={classes.infoArea}>
                <span>Area: {props.meal.area} </span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MealsDetail;

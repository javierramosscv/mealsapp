import React from "react";
import { Link } from "react-router-dom";
import classes from "./CategoryMeal.module.css";
const CategoryMeal = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.containerCategory}>
        <div className={classes.categoryImage}>
          <img src={props.category.imageThumb} alt="" />
        </div>
        <div className={classes.categoryContent}>
          <div className={classes.content}>
            <div className={classes.content1}>
              <div className={classes.contentTitle}>
                <h3>{props.category.name.substr(0, 30)}</h3>
              </div>

              <div className={classes.contentLink}>
                <Link className="btn" to={`/mealList/${props.category.name}`}>
                  View&nbsp;Meal&nbsp;List
                </Link>
              </div>
            </div>
            <div className={classes.content2}>
              <div className={classes.contentdescription}>
                {props.category.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CategoryMeal;

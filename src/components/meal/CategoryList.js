import React, { Fragment } from "react";
import classes from "./CategoryList.module.css";
import CategoryMeal from "./CategoryMeal";
const CategoryList = (props) => {
  return (
    <Fragment>
      <ul className={classes.categorycontainer}>
        {props.list.map((element) => (
          <CategoryMeal key={element.id} category={element} />
        ))}
      </ul>
    </Fragment>
  );
};

export default CategoryList;

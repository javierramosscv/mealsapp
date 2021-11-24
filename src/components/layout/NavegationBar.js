import React from "react";
import { Link } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./NavegationBar.module.css";
const NavegationBar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Great Meals
        </Link>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </nav>
      <HeaderCartButton />
    </header>
  );
};

export default NavegationBar;

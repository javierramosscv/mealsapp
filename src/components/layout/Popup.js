import React from "react";

import classes from "./Popup.module.css";

const Popup = (props) => {
  return props.flat ? (
    <div className={classes.popup}>
      <div className={classes.popupinner}>
        <button className={classes.closebtn} onClick={props.onClose}>
          Close
        </button>

        <div>{props.children}</div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;

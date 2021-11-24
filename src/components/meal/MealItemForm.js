import React, { useState, useEffect } from "react";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountInput, setAmountInput] = useState(1);
  const [isValid, setIsValid] = useState(true);
  const [confirmation, seConfirmation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      seConfirmation(false);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [confirmation]);

  const amountInputHandler = (event) => {
    setAmountInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const amountNumber = +amountInput;

    if (amountInput.length === 0 || amountNumber < 1 || amountNumber > 5) {
      setIsValid(false);
      return;
    }

    props.onAddtoCart(amountNumber);
    setIsValid(true);
    seConfirmation(true);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.Input}>
        <label htmlFor="amount"> Amount </label>
        <input
          id="amount"
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
          onChange={amountInputHandler}
        />
      </div>
      <p />
      <div>
        <button>+ Add</button>
      </div>
      {!isValid && (
        <p>The amount is not valid, Please enter a valid amount(1-5)</p>
      )}
      <div className={classes.confirmation}>
        {confirmation ? (
          <div className={classes.messageform}>Added Successfully</div>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default MealItemForm;

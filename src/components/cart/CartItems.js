import classes from "./CartItems.module.css";

const CartItems = (props) => {
  return (
    <div className={classes["cart-item-container"]}>
      <div className={classes["cart-main"]}>
        <div className={classes["item-number"]}>{props.number}-</div>
        <div className={classes["cart-content"]}>
          <div className={classes["item-title"]}>
            {props.item.name.substr(0, 40)}
          </div>
          <div className={classes["item-price-content"]}>
            <div className={classes.actions}>
              <button onClick={props.onRemove}>−</button>
              <button onClick={props.onAdd}>+</button>
            </div>
            <div className={classes["qty-price"]}>
              <span className={classes.price}>
                Price: {`$${props.item.price}`}
              </span>
              <span className={classes.amount}> Qty x {props.item.amount}</span>
              <span className={classes.amount}>
                {" "}
                SubTotal = {props.item.amount * props.item.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

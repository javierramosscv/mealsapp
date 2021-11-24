import { Fragment, useContext } from "react";

import CartItems from "./CartItems";
import classes from "./Cart.module.css";
import CartContext from "../../store/Cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeAllItemsHandler = (item) => {
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.length !== 0 ? (
        cartCtx.items.map((item, index) => (
          <CartItems
            number={index + 1}
            key={item.id}
            item={item}
            onAdd={cartItemAddHandler.bind(null, item)}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
          />
        ))
      ) : (
        <Fragment>
          <h3>Your cart is empty</h3>
          <h3> Add items to get started !!!</h3>
        </Fragment>
      )}
    </ul>
  );

  return (
    <div>
      <div className={classes.headerbar}>
        <div className={classes.logo}>Great Meals</div>
        <div className={classes.headertext}>Your order</div>
      </div>

      <div className={classes.box}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{`$${totalAmount}`}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes.button} onClick={removeAllItemsHandler}>
            remove all
          </button>
          <button className={classes.button} disabled>
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React, { useReducer } from "react";
import CartContext from "./Cart-context";

const defaultCartState = {
  items: JSON.parse(localStorage.getItem("items"))
    ? JSON.parse(localStorage.getItem("items"))
    : [],
  totalAmount: JSON.parse(localStorage.getItem("totalAmount"))
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0,
};
// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
// };

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    // calcula el total del pedido

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const extistingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[extistingItemIndex];

    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[extistingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    localStorage.setItem("items", JSON.stringify(updatedItems));
    localStorage.setItem("totalAmount", JSON.stringify(updatedTotalAmount));
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const extistingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[extistingItemIndex];

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };

      updatedItems = [...state.items];
      updatedItems[extistingItemIndex] = updatedItem;
    }

    const updatedTotalAmount = state.totalAmount - existingItem.price;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR_CART") {
    localStorage.removeItem("items");
    localStorage.removeItem("totalAmount");

    return {
      items: [],
      totalAmount: 0,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const AddItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id });
  };

  const emptyCartHandler = (id) => {
    dispatchCartAction({ type: "CLEAR_CART" });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: AddItemHandler,
    removeItem: removeItemHandler,
    clearCart: emptyCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

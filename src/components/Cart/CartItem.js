import React from "react";

import classes from "./CartItem.module.css";

const CartItem = props => {
  const removeItemHandler = () => {
    props.onRemoveItem(props.id);
  };

  return (
    <li className={classes["cart-item"]}>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.amount}>x{props.amount}</div>
      <div className={classes.price}>₹{props.price * props.amount}</div>
      <button onClick={removeItemHandler} className={classes["remove-item"]}>
        &times;
      </button>
    </li>
  );
};

export default CartItem;

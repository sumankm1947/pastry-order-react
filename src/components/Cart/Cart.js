import React, { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartItemContext from "../../context/cart-item-context";
import classes from "./Cart.module.css";

const Cart = props => {
  const cartCtx = useContext(CartItemContext);
  const allCartItems = cartCtx.items;

  const checkOutHandler = () => {
    console.log("Checking out...");
    console.log("Things You ordered : ");
    cartCtx.items.forEach(item => {
      console.log(`${item.itemname} : ${item.amount}`);
      for (let i = 0; i < item.amount; i++) {
        cartCtx.removeItem(item.id);
      }
    });
    console.log("Thank You...");
    props.onHideCart();
  };

  return (
    <Modal onClose={props.onHideCart}>
      <ul className={classes.cart}>
        {allCartItems.map(item => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.itemname}
            price={item.price}
            amount={item.amount}
            onRemoveItem={cartCtx.removeItem}
          />
        ))}
      </ul>
      <div className={classes["total-price"]}>
        Total : ₹ {cartCtx.totalAmount}
      </div>
      <div className={classes.buttons}>
        {cartCtx.totalAmount ? (
          <button onClick={checkOutHandler} className={classes["check-out"]}>
            Check Out
          </button>
        ) : (
          ""
        )}
        <button onClick={props.onHideCart} className={classes.close}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;

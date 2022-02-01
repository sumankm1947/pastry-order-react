import React, { useRef, useContext, useState } from "react";

import classes from "./Item.module.css";
import Input from "../UI/Input";
import CartItemContext from "../../context/cart-item-context";

const Item = props => {
  const inputAmountRef = useRef();
  const [formIsValid, setFormIsValid] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const cartCtx = useContext(CartItemContext);

  const changeInputHandler = event => {
    setInputVal(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    const enteredAmountNumber = +inputAmountRef.current.value.trim();
    setInputVal("");

    if (enteredAmountNumber <= 0 || enteredAmountNumber > 10) {
      setFormIsValid(false);
      return;
    }
    setFormIsValid(true);
    cartCtx.addItem({
      id: props.item.id,
      itemname: props.item.itemname,
      price: props.item.price,
      amount: enteredAmountNumber,
    });
  };

  return (
    <li className={classes.card}>
      <div className={classes["card-content"]}>
        <div className={classes.front}>
          <img src={require(`../../images/${props.item.img}`)} alt="s" />
          <div className={classes.overlay}></div>
          <h2 className={classes["card-title"]}>{props.item.itemname}</h2>
          <p className={classes.price}>₹ {props.item.price} per item</p>
          <p className={classes["card-subtitle"]}>{props.item.subtitle}</p>
        </div>

        <div className={classes.back}>
          <p className={classes.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quo
            unde distinctio, totam aperiam architecto earum tempora quis
            blanditiis aliquid.
          </p>
        </div>
      </div>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={inputAmountRef}
          label="Amount : "
          input={{
            type: "number",
            min: 1,
            max: 10,
            step: 1,
            value: inputVal,
            onChange: changeInputHandler,
          }}
          className={classes.input}
        />
        <button type="submit" className={classes["input-btn"]}>
          Add to Cart
        </button>
        {!formIsValid && (
          <p className={classes.error}>Please Enter a valid number (1-10)</p>
        )}
      </form>
    </li>
  );
};

export default Item;

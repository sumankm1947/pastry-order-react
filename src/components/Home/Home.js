import React, { useContext } from "react";

import classes from "./Home.module.css";
import CartIcon from "../Cart/CartIcon";
import bgImage from "../../images/bg-1.jpg";
import CartItemContext from "../../context/cart-item-context";

const Home = props => {
  const cartCtx = useContext(CartItemContext);
  let num = 0;
  cartCtx.items.forEach(item => {
    num += item.amount;
  });

  return (
    <React.Fragment>
      <nav className={classes.navbar}>
        <div className={classes.logo}>Pastry</div>
        <div onClick={props.onShowCart} className={classes.cart}>
          <div className={classes["cart-icon"]}>
            <CartIcon />
          </div>
          <span>Cart</span>
          {num ? <div className={classes["cart-item-number"]}>{num}</div> : ""}
        </div>
      </nav>
      <div className={classes.img}>
        <img src={bgImage} alt="background" />
        <div className={classes["welcome-msg"]}>
          <h1>Ultimate Pastry Destination</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            similique dolorum fugiat repellat libero ipsam explicabo doloribus
            distinctio quaerat assumenda!
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;

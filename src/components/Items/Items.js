import React from "react";

import Item from "./Item";
import classes from "./Items.module.css";

const dummy_data = [
  {
    id: "a1",
    itemname: "cookies",
    subtitle: "Cookies made from best quality flour",
    description: "description about the item",
    price: 20,
    img: "cookies.jpg",
  },
  {
    id: "a2",
    itemname: "Chocolate Cake",
    subtitle: "Tasty dark chocolate cake",
    description: "description about the item",
    price: 100,
    img: "choco-cake.jpg",
  },
  {
    id: "a3",
    itemname: "Chocolate Mix",
    subtitle: "Different types of items served together",
    description: "description about the item",
    price: 200,
    img: "choco-mix.jpg",
  },
  {
    id: "a4",
    itemname: "Cream Roll",
    subtitle: "Best cream roll on the planet",
    description: "description about the item",
    price: 80,
    img: "cream-roll.jpg",
  },
  {
    id: "a5",
    itemname: "Cup Cake",
    subtitle: "Small, Tasty, Creamy",
    description: "description about the item",
    price: 50,
    img: "cup-cake.jpg",
  },
  {
    id: "a6",
    itemname: "Strawberry Cake",
    subtitle: "The best strawberry cake you will ever taste",
    description: "description about the item",
    price: 400,
    img: "strawberry-cake.jpg",
  },
];

const Items = () => {
  return (
    <div className={classes["item-container"]}>
      <ul className={classes.items}>
        {dummy_data.map(item => (
          <Item key={item.id} item={item}></Item>
        ))}
      </ul>
    </div>
  );
};

export default Items;

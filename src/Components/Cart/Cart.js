import classes from "./Cart.module.css";
import { BLUE } from "../../App";
import CartItem from "./CartItem/CartItem";
import CartTotal from "./CartTotal/CartTotal";
import react, { useState } from "react";

function Cart(props) {
  const [lineItems, setLineItems] = useState(props.lineItems);

  const removeLineItem = (lineItemId) => {
    setLineItems((prev) => {
      const current = prev.filter((item) => item.id !== lineItemId);
      return [...current];
    });
  };
  return (
    <div className={classes.cart}>
      <div className={classes.header}>
        <h2 style={{ color: BLUE }}>Your Cart</h2>
      </div>

      <div className={classes.cartItems}>
        {lineItems.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={item}
              removeLineItem={removeLineItem}
            />
          );
        })}
      </div>
      <CartTotal />
    </div>
  );
}
export default Cart;

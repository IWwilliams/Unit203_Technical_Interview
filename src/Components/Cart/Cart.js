import classes from "./Cart.module.css";
import { BLUE } from "../../App";
import CartItem from "./CartItem/CartItem";

function Cart(props) {
  return (
    <div className={classes.cart}>
      <div className={classes.header}>
        <h2 style={{ color: BLUE }}>Your Cart</h2>
      </div>

      <div className={classes.cartItems}>
        {props.lineItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}
export default Cart;

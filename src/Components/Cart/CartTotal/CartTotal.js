import classes from "./CartTotal.module.css";
import { CartObject, BLUE } from "../../../App";
function CartTotal() {
  return (
    <div className={classes.gridContainer}>
      <div className={classes.gridItemLeft}>Subtotal</div>
      <div className={classes.gridItemRight}>{`$${CartObject.SUBTOTAL}`}</div>
      <div className={classes.gridItemLeft}>Taxes (estimated)</div>
      <div className={classes.gridItemRight}>{`$${CartObject.HST}`}</div>
      <div className={classes.gridItemLeft}>Shipping</div>
      <div className={classes.gridItemRight}>{`Free`}</div>
      <div
        style={{ color: BLUE, fontWeight: "bold" }}
        className={classes.gridItemLeft}
      >
        Total
      </div>
      <div
        style={{ color: BLUE, fontWeight: "bold" }}
        className={classes.gridItemRight}
      >{`$${CartObject.TOTAL}`}</div>
    </div>
  );
}
export default CartTotal;

"use client";

import { useSelector } from "react-redux";
import styles from "./cart.module.css";
import { RootState } from "@/types";
import { formatPrice } from "@/utils";

import CartProduct from "./CartProduct.component";

export default function CartPage() {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div className={styles.container}>
      {cart.products.length > 0 ? (
        <div className={styles["list-container"]}>
          <ul className={styles.list}>
            {cart.products.map((product) => (
              <CartProduct key={product.id} product={product} />
            ))}
          </ul>
        </div>
      ) : (
        <span style={{ fontWeight: 700, fontSize: 24, textAlign: "center" }}>
          Your cart is empty
        </span>
      )}
      <hr />
      <div className={styles["price-container"]}>
        <b>Total:</b> {formatPrice(cart.totalPrice)}
      </div>
    </div>
  );
}

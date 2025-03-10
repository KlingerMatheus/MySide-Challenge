"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { RootState } from "@/types";

export const Navbar = () => {
  const cartProductsQuantity = useSelector(
    (state: RootState) => state.cart.products.length
  );

  return (
    <nav className={styles.nav}>
      <div className={styles["logo-wrapper"]}>
        <Image
          className={styles.logo}
          src="/my-side-logo.jpg"
          alt="MySide logo"
          width={50}
          height={50}
          loading="lazy"
        />
        <span>MySide</span>
      </div>
      <ul className={styles["nav-links"]}>
        <li className={styles["nav-link"]}>
          <Link href="/">View products</Link>
        </li>
        <span className={styles.divider} />
        <li className={styles["cart-button"]}>
          <Link href="/cart" className={styles["cart-link"]}>
            <span className={styles["cart-items-count"]}>
              {cartProductsQuantity <= 9 ? cartProductsQuantity : "9+"}
            </span>
            <ShoppingCartIcon height={32} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

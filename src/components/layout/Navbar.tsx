import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export const Navbar = () => {
  const cartItemsQuantity = 2; // While Store was not implemented yet, this value is being mocked

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
          <Link href="/cart">
            <span className={styles["cart-items-count"]}>
              {cartItemsQuantity <= 9 ? cartItemsQuantity : "9+"}
            </span>
            <ShoppingCartIcon height={32} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

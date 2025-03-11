import { PrimaryButton } from "@/components/primary-button/PrimaryButton";
import { CartActions } from "@/lib/reducers/cartSlice";
import { formatPrice } from "@/utils";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import styles from "./cart.module.css";
import { useDispatch } from "react-redux";
import { CartProduct as CartProductType } from "@/types";

const CartProduct = ({ product }: { product: CartProductType }) => {
  const dispatch = useDispatch();

  function incrementQuantity() {
    dispatch(CartActions.changeQuantity({ type: "increment", id: product.id }));
  }

  function decrementQuantity() {
    if (product.quantity <= 1) return;

    dispatch(CartActions.changeQuantity({ type: "decrement", id: product.id }));
  }

  function removeProduct() {
    dispatch(CartActions.removeProduct(product.id));
  }

  return (
    <li key={product.id} className={styles["cart-product"]}>
      <div className={styles["product-details"]}>
        <Link href={`/products/${product.id}`}>
          <Image
            className={styles["product-image"]}
            src={product.image}
            width={100}
            height={100}
            alt={product.title}
          />
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div className={styles["product-title"]}>{product.title}</div>
          <b style={{ fontSize: 24 }}>{formatPrice(product.price ?? 0)}</b>
        </div>
      </div>

      <div className={styles["product-actions"]}>
        <button
          aria-labelledby="Decrement"
          disabled={product.quantity <= 1}
          onClick={decrementQuantity}
        >
          <MinusIcon height={16} />
        </button>
        {product.quantity}
        <button aria-labelledby="Increment" onClick={incrementQuantity}>
          <PlusIcon height={16} />
        </button>
      </div>
      <div className={styles["remove-action"]}>
        <PrimaryButton
          onClick={removeProduct}
          label={<TrashIcon height={24} style={{ paddingInline: 18 }} />}
          onHoverOverlay={
            <span style={{ fontSize: 12, fontWeight: 700 }}>Remove</span>
          }
          variant="addToCart"
          isExistingProduct
        />
      </div>
    </li>
  );
};

export default CartProduct;

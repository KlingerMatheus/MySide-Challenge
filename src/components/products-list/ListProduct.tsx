import { Product } from "@/types";
import { FC, useState } from "react";
import Image from "next/image";

import styles from "./styles.module.css";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { CartActions } from "@/lib/reducers/cartSlice";
import { useRouter } from "next/navigation";

interface ListProductProps {
  product: Product;
  isExisting?: boolean;
}

const NOT_FOUND_IMAGE_SRC = "/image-not-found.png";

const ListProduct: FC<ListProductProps> = ({ product, isExisting }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  function addToCart() {
    if (isExisting) {
      dispatch(CartActions.removeProduct(product.id));
      return;
    }

    dispatch(CartActions.addProduct(product));
  }

  function redirectToProductsPage() {
    router.push(`/products/${product.id}`);
  }

  return (
    <div className={styles.product}>
      <div className={styles.image} onClick={redirectToProductsPage}>
        <Image
          alt={product.title}
          src={product.image}
          defaultValue={NOT_FOUND_IMAGE_SRC}
          loading="lazy"
          fill
          objectFit="cover"
          blurDataURL={NOT_FOUND_IMAGE_SRC}
          placeholder="blur"
          sizes="300px"
        />
      </div>
      <div className={styles["product-info"]}>
        <h3 title={product.title}>{product.title}</h3>
        <p>{product.description}</p>
      </div>
      <button
        className={styles.addCartButton}
        style={{
          background: isExisting ? "#eb4848" : "#48eb50",
        }}
        onClick={addToCart}
      >
        {isExisting ? <MinusIcon height={24} /> : <PlusIcon height={24} />}
        <ShoppingCartIcon height={24} />
      </button>
    </div>
  );
};

export default ListProduct;

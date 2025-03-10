"use client";

import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { getProduct } from "@/lib/actions/product";
import { Product, RootState } from "@/types";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "@/lib/reducers/cartSlice";

import styles from "./product.module.css";
import { formatPrice } from "@/utils";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { PrimaryButton } from "@/components/primary-button/PrimaryButton";

export default function ProductPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<Product | undefined>();
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: RootState) => state.cart.products);

  const isExistingProduct = useMemo(() => {
    return cartProducts.some((cartProduct) => cartProduct.id === product?.id);
  }, [cartProducts, product?.id]);

  const onAddToCart = () => {
    if (!product) return;

    if (isExistingProduct) {
      dispatch(CartActions.removeProduct(product.id));
      return;
    }
    dispatch(CartActions.addProduct(product));
  };

  const fetchProduct = useCallback(() => {
    setIsLoading(true);
    return getProduct(Number(id))
      .then((data) => setProduct(data.product))
      .finally(() => setIsLoading(false));
  }, [id]);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className={styles.container}>
          <div className={styles["product-title"]}>{product?.title}</div>
          <div className={styles.checkout}>
            <div className={styles["product-image"]}>
              <Image
                src={product?.image ?? ""}
                alt={product?.title ?? "Product"}
                fill
              />
            </div>
            <div className={styles["add-cart-wrapper"]}>
              <span>{formatPrice(product?.price ?? 0)}</span>
              <PrimaryButton
                onClick={onAddToCart}
                label={
                  <>
                    {isExistingProduct ? (
                      <MinusIcon height={24} />
                    ) : (
                      <PlusIcon height={24} />
                    )}
                    <ShoppingCartIcon height={24} />
                  </>
                }
                variant="addToCart"
                onHoverOverlay={
                  <span>
                    {isExistingProduct ? "Remove from" : "Add to"} cart
                  </span>
                }
                isExistingProduct={isExistingProduct}
              />
            </div>
          </div>
          <div className={styles.details}>
            <h3>Details:</h3>
            <ul className={styles.list}>
              <li> {product?.description}</li>
              <li>
                <b>Brand:</b> <span>{product?.brand}</span>
              </li>
              <li>
                <b>Color:</b> <span>{product?.color}</span>
              </li>
              <li>
                <b>Category:</b> <span>{product?.category}</span>
              </li>
              <li>
                <b>Model:</b> <span>{product?.model}</span>
              </li>
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}

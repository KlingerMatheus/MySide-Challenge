"use client";

import { LoadingSpinner } from "@/components/loading-spinner/LoadingSpinner";
import { ProductsList } from "@/components/products-list";
import { getAllProducts, getProductsByCategory } from "@/lib/actions/product";
import { Category, Product, RootState } from "@/types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./page.module.css";
import { getAllCategories } from "@/lib/actions/category";
import {
  Bars3Icon,
  ChevronDownIcon,
  TagIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export default function HomePage() {
  const [products, setProducts] = useState<Product[] | undefined>([]);
  const [categories, setCategories] = useState<Category[] | undefined>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isListLoading, setIsListLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const cartProducts = useSelector((state: RootState) => state.cart.products);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  async function fetchCategories() {
    await getAllCategories()
      .then((data) => setCategories(data.categories))
      .finally(() => setIsLoading(false));
  }

  async function fetchPopularProducts() {
    setIsListLoading(true);
    await getAllProducts()
      .then((data) => {
        const popularProducts = data.products?.filter(
          (product) => product.popular
        );

        setProducts(popularProducts);
      })
      .finally(() => setIsListLoading(false));
  }

  async function fetchAllProducts() {
    setIsListLoading(true);
    await getAllProducts()
      .then((data) => setProducts(data.products))
      .finally(() => setIsListLoading(false));
  }

  async function handleSelectCategory(category?: string | "popular") {
    setIsListLoading(true);
    setSelectedCategory(category ?? null);

    if (!category) {
      fetchAllProducts();
      return;
    } else if (category === "popular") {
      fetchPopularProducts();
      return;
    }

    await getProductsByCategory(category)
      .then((data) => setProducts(data.products))
      .finally(() => setIsListLoading(false));
  }

  useEffect(() => {
    if (!selectedCategory) {
      fetchAllProducts();
    }

    fetchCategories();
  }, []);

  return (
    <div className="page-container">
      {isLoading && <LoadingSpinner />}

      {!isLoading && (
        <div className={styles["main-container"]}>
          <div className={styles["filters-container"]}>
            <div className={styles.filter}>
              <div
                className={styles["filter-name"]}
                onClick={() => setIsCategoriesOpen((prev) => !prev)}
              >
                <h3>
                  <TagIcon height={18} />
                  Select category
                </h3>
                {isCategoriesOpen ? (
                  <XMarkIcon height={24} />
                ) : (
                  <Bars3Icon height={24} />
                )}
              </div>
              {isCategoriesOpen && (
                <ul>
                  <li
                    onClick={() => handleSelectCategory()}
                    data-isactive={!selectedCategory}
                  >
                    All
                  </li>
                  <li
                    onClick={() => handleSelectCategory("popular")}
                    data-isactive={selectedCategory === "popular"}
                  >
                    Popular
                  </li>
                  {categories &&
                    categories.length > 0 &&
                    categories?.map((category) => (
                      <li
                        key={category}
                        onClick={() => handleSelectCategory(category)}
                        data-isactive={selectedCategory === category}
                      >
                        {category}
                      </li>
                    ))}
                </ul>
              )}
            </div>
          </div>
          {isListLoading && <LoadingSpinner />}
          {!isListLoading && (
            <ProductsList.Container>
              {products?.map((product) => {
                const isExisting = !!cartProducts.find(
                  (cartProduct) => cartProduct.id === product.id
                );

                return (
                  <ProductsList.Product
                    key={product.id}
                    isExisting={isExisting}
                    product={product}
                  />
                );
              })}
            </ProductsList.Container>
          )}
        </div>
      )}
    </div>
  );
}

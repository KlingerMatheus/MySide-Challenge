"use server";

import { ApiResponse, Product } from "@/types";

export async function getProductsByCategory(
  category: string
): Promise<ApiResponse<Product>> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/category?type=${category}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse<Product> = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return { status: "error", message: "Failed to fetch products" };
  }
}

export async function getProduct(id: number): Promise<ApiResponse<Product>> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse<Product> = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return { status: "error", message: "Failed to fetch product" };
  }
}

export async function getAllProducts(): Promise<ApiResponse<Product>> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?limit=150`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse<Product> = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return { status: "error", message: "Failed to fetch products" };
  }
}

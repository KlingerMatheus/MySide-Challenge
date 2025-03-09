"use server";

import { ApiResponse, Categories } from "@/types";

export async function getAllCategories(): Promise<ApiResponse<Categories>> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/category`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse<Categories> = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {
      status: "error",
      message: "Failed to fetch categories",
    };
  }
}

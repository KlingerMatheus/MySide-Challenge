interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color: string;
  category: string;
  popular?: boolean;
  discount?: number;
}

type Category = string;

type Categories = Category[];

interface ApiResponse<T> {
  status: string;
  message: string;
  categories?: Categories;
  products?: T[];
}

export type ProductsApiResponse = ApiResponse<Product>;

export type CategoriesApiResponse = ApiResponse<Category>;

export type CartState = {
  products: Product[];
};

export type RootState = {
  cart: CartState;
};

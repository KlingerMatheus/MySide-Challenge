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

interface ApiResponse {
  status: string;
  message: string;
  categories?: Categories;
  products?: Product[];
  product?: Product;
}

export type ProductsApiResponse = ApiResponse<Product>;

export type CategoriesApiResponse = ApiResponse<Category>;

type CartProduct = Product & {
  quantity: number;
};

export type CartState = {
  products: CartProduct[];
  totalPrice: number;
};

export type RootState = {
  cart: CartState;
};

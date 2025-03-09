import { CartProduct, CartState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartState = {
  products: [],
  totalPrice: 0,
};

function calculateTotalPrice(products: CartProduct[]) {
  let total = 0;

  products.forEach((product) => {
    total += product.price * product.quantity;
  });

  return total;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const isExisting = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (isExisting) return;

      state.products.push({ ...action.payload, quantity: 1 });
      state.totalPrice = calculateTotalPrice(state.products);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.totalPrice = calculateTotalPrice(state.products);
    },
    changeQuantity: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          const quantityChange = action.payload.type === "increment" ? 1 : -1;
          return { ...product, quantity: product.quantity + quantityChange };
        }
        return product;
      });
      state.totalPrice = calculateTotalPrice(state.products);
    },
  },
});

export const CartActions = cartSlice.actions;
export default cartSlice.reducer;

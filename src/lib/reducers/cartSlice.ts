import { CartState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const isExisting = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (isExisting) return;

      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    changeQuantity: (state, actions) => {},
  },
});

export const CartActions = cartSlice.actions;
export default cartSlice.reducer;

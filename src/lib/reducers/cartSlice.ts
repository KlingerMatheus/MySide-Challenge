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

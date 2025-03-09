import { combineReducers } from "redux";
import cartSlice from "./cartSlice";

const rootReducer = combineReducers({
  cart: cartSlice,
});

export default rootReducer;

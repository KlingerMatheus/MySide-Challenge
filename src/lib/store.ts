import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/lib/reducers";

const store = configureStore({
  reducer: rootReducer,
});

export default store;

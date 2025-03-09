"use client";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/lib/reducers";
import { FC, PropsWithChildren } from "react";

const ProviderWrapper: FC<PropsWithChildren> = ({ children }) => {
  const store = configureStore({ reducer: rootReducer });

  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;

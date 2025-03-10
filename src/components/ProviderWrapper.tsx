"use client";

import { Provider } from "react-redux";
import { FC, PropsWithChildren } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../lib/store";

const ProviderWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ProviderWrapper;

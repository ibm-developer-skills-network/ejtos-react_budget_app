import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import RootReducer from "../reducers";

const RootStore = createStore(RootReducer);

const AppProvider = ({ children }) => (
  <Provider store={RootStore}>{children}</Provider>
);

export default AppProvider;


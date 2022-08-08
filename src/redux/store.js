import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
// import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./reducer";
// import bugReducer from "./bugs/bugReducer";
// import cakeReducer from "./cakes/cakeReducer";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
// const store = configureStore({ reducer });
// const store = configureStore({ reducer: bugReducer });

export default store;

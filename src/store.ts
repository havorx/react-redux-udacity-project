// create redux store with redux-toolkit and redux-thunk
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({ reducer: rootReducer });
export default store;

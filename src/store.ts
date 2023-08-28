import { configureStore } from "@reduxjs/toolkit";
import addAndSubCountReducer from "./reducers/addAndSubCountReducer";

const store = configureStore({ reducer: addAndSubCountReducer });

export default store;

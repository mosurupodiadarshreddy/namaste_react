import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";

const appStore = configureStore({
    reducer : {
        cart : cartReducer,
        // user : userReducer
    }
});

export default appStore;
import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../slices/productSlice"

export const store = configureStore({
    reducer : {
        cartProduct : productsSlice
    },
})

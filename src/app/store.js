import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/products/productSlice"
import SortReducer from "../features/sort/sortSlice"
export const store = configureStore({
    reducer:{
        product:ProductReducer,
        sort:SortReducer
    }
})
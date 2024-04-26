import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/products/productSlice"
import SortReducer from "../features/sort/sortSlice"
import CartReducer from "../features/cart/CartSlice"
export const store = configureStore({
    reducer:{
        product:ProductReducer,
        sort:SortReducer,
        cart:CartReducer
    }
})
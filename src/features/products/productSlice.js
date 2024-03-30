import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        addProducts: (state,action)=>{
            state=action.payload;
            return state;
        }
      
    }
})
export const {addProducts} = productSlice.actions;
export default productSlice.reducer;
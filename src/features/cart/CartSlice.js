import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "products":[],
    "totalAmount":0,
    "totalItems":0,
    "removed":{
    },
    name:"",

};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const payload = action.payload;
 
      const foundProduct = state.products.find((value) => value.productId === action.payload.productId);
      if(foundProduct){
        foundProduct.count += 1;
      }
      else{
        state.products.push({...payload,count:1})
      }
   
      return state;
    },
    cartTotalItems: (state)=>{
        const total = state.products.reduce((sum,item)=>{console.log(sum+item.price*item.count); return sum+item.price*item.count},0)
        state.totalAmount=total;
        state.totalItems++;
    }
  },
});
export const { addToCart,cartTotalItems } = CartSlice.actions;
export default CartSlice.reducer;

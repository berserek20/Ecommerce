import { createSlice } from "@reduxjs/toolkit";

const initialState="normal";

const sortSlice = createSlice({
    name: "sort",
    initialState,
    reducers:{
        sortingFormat: (state,action)=>{
            try{

                state=action.payload;
                console.log("state",state)
                return state;
            }
            catch(e){
                console.log(e)
            }

        },
       

    }
})
export const {sortingFormat} = sortSlice.actions;
export default sortSlice.reducer;
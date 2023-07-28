import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  products:[]
}

const productSlice = createSlice({
  name:'product',
  initialState,
  reducers:{
    // define reducers here
  }
})


export const {} = productSlice.actions;
export default productSlice.reducer;
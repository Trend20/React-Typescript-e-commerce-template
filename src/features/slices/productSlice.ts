import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  products: any[]
  product: null
  isSold: boolean,
  inCart: boolean
}

const initialState: InitialState = {
  products: [],
  product: null,
  isSold: false,
  inCart: false
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchAllProducts: (state: InitialState, action: { payload: any, type: string }): void => {
      state.products = action.payload
    },
    addProductToCart: (state: InitialState, action: { payload: any, type: string }): void => {
      state.products.push(action.payload);
      state.product = action.payload;
      state.inCart = true;
    },
  }
})

export const {fetchAllProducts, addProductToCart} = productSlice.actions
export default productSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

interface Product {
  name: string
  quantity: number
  category: string
  isSold: boolean
  inCart: boolean
}

interface InitialState {
  products: Product[]
  product: Product
}

const initialState: InitialState = {
  products: [],
  product: {
    name: '',
    quantity: 0,
    category: '',
    isSold: false,
    inCart: false
  }
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchAllProducts: (state: InitialState, action: { payload: any, type: string }): void => {
      state.products = action.payload
    }
  }
})

export const {fetchAllProducts} = productSlice.actions
export default productSlice.reducer

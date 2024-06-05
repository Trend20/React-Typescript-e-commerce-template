import { createSlice } from '@reduxjs/toolkit'

// define types
interface CartItem {
  total: 0
  isEmpty: boolean
}

interface InitialState {
  items: CartItem[]
  isEmpty: boolean
}

const initialState: InitialState = {
  items: [],
  isEmpty: true
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state: InitialState, action: { payload: any, type: string }): void => {
      state.items.push(action.payload);
      state.isEmpty = false
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter((item:any) => item.id !== action.payload.id);
    }
  }
})

export const {addItemToCart, removeItemFromCart} = cartSlice.actions
export default cartSlice.reducer

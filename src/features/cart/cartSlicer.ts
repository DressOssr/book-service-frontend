import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";


interface CartState {
    value: number
}
const initialState: CartState = {
    value: 0
}
const cartSlicer = createSlice({
    name: "cart",
    initialState:initialState,
    reducers: {
        setCartCount: (state, action:PayloadAction<number>) => {
          state.value = action.payload
        },
        addToCart: (state ) => {
            state.value += 1
        },
        removeFromCart: (state) => {
            state.value -= 1
        }
    }
})
export const {addToCart, removeFromCart,setCartCount} = cartSlicer.actions
export default cartSlicer.reducer
export const selectCount = (state: RootState) => state.cart.value

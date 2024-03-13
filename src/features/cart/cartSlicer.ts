import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {ICart} from "../../model/ICart.ts";


interface CartState {
    cartItems:ICart[]
}

const initialState: CartState = {
    cartItems: []
}
const cartSlicer = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addCartItem: (state, action: PayloadAction<ICart>) => {
            state.cartItems.push(action.payload)
        },
        setCartItems: (state, action: PayloadAction<ICart[]>) => {
                state.cartItems = action.payload
        },
        removeItem: (state, action: PayloadAction<number>) => {
           state.cartItems = state.cartItems.filter(cart => cart.id !== action.payload)
        }
    }
})
export const {
    setCartItems,
    addCartItem,
    removeItem
} = cartSlicer.actions
export default cartSlicer.reducer
export const selectCartItems = (state: RootState) => state.cart.cartItems
export const selectCartItemsCount = (state: RootState) => state.cart.cartItems.length
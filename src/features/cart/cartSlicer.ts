import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {ICart} from "../../model/ICart.ts";


interface CartState {
    cartItems: ICart[];
    totalPrice: number;
}

const initialState: CartState = {
    cartItems: [],
    totalPrice: 0
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
            state.totalPrice = action.payload.reduce((acc, item) => acc + Number(item.book.price), 0)
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.cartItems = state.cartItems.filter(cart => cart.id !== action.payload)
            state.totalPrice = state.cartItems.reduce((acc, item) => acc + Number(item.book.price), 0)
        },
        clearCart: (state) => {
            state.cartItems = initialState.cartItems
            state.totalPrice = initialState.totalPrice
        }
    }
})
export const {
    setCartItems,
    addCartItem,
    removeItem,
    clearCart
} = cartSlicer.actions
export default cartSlicer.reducer
export const selectCartItems = (state: RootState) => state.cart.cartItems
export const selectCartItemsCount = (state: RootState) => state.cart.cartItems.length
export const selectCartTotalPrice = (state: RootState) => state.cart.totalPrice
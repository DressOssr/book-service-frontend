import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authReducer from "../features/auth/authSlice.ts"
import userReducer from "../features/user/userSlicer.ts"
import cartReducer from "../features/cart/cartSlicer.ts"
import favoriteReducer from "../features/favorite/favoriteSlice.ts"
import {apiSlice} from "./api/apiSlice.ts";


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
    favorite: favoriteReducer,
    [apiSlice.reducerPath]: apiSlice.reducer

})
export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
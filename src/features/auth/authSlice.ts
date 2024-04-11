import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {IAuth} from "../../model/IAuth.ts";
const initialStateAuth = {
    accessToken: "",
    isAuth: false,
    isLoading: false
}
const authSlice = createSlice({
    name: "auth",
    initialState: initialStateAuth,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setCredentials: (state, action: PayloadAction<IAuth>) => {
            state.accessToken = action.payload.accessToken
            state.isAuth = true
        },
        logOut: () => initialStateAuth,
    }
})

export const {
    setCredentials,
    logOut,
    setIsLoading
} = authSlice.actions
export default authSlice.reducer
export const selectCurrentAccessToken = (state: RootState) => state.auth.accessToken
export const selectIsAuth = (state: RootState) => state.auth.isAuth
export const selectIsLoading = (state: RootState) => state.auth.isLoading
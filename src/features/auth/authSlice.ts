import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {IAuth} from "../../model/IAuth.ts";

 interface IAuthState{
    accessToken: string,
    isAuth: boolean | null,
    isLoading: boolean
}
const initialStateAuth:IAuthState = {
    accessToken: "",
    isAuth: null,
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
        },
        setIsAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        },
        logout: () => initialStateAuth,
    }
})

export const {
    setCredentials,
    logout,
    setIsLoading,
    setIsAuth
} = authSlice.actions
export default authSlice.reducer
export const selectCurrentAccessToken = (state: RootState) => state.auth.accessToken
export const selectIsAuth = (state: RootState) => state.auth.isAuth
export const selectIsLoading = (state: RootState) => state.auth.isLoading
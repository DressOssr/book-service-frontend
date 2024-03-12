import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {IAuth} from "../../model/IAuth.ts";
import {setUser,} from "../user/userSlicer.ts";
import {IUser} from "../../model/IUser.ts";
import {useRefreshTokenQuery} from "./authApiSlice.ts";


const initialStateAuth: IAuth = {
    accessToken: "",

}


const authSlice = createSlice({
    name: "auth",
    initialState: {...initialStateAuth, auth: false,isLoading:true},
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setCredentials: (state, action: PayloadAction<IAuth>) => {
            state.accessToken = action.payload.accessToken
            state.auth = true
        },
        logOut: (state) => {
            state.accessToken = ""
            state.auth = false
        },
        checkAuth: () => {
        }
    }
})

export const {setCredentials, logOut,setIsLoading} = authSlice.actions
export default authSlice.reducer
export const selectCurrentAccessToken = (state: RootState) => state.auth.accessToken
export const selectIsAuth = (state: RootState) => state.auth.auth
export const selectIsLoading = (state: RootState) => state.auth.isLoading
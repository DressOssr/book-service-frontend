import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {IAuth} from "../../model/IAuth.ts";
import {setUser,} from "../user/userSlicer.ts";
import {IUser} from "../../model/IUser.ts";


const initialStateAuth: IAuth = {
    accessToken: "",
}


const authSlice = createSlice({
    name: "auth",
    initialState: {...initialStateAuth, auth: false},
    reducers: {
        setCredentials: (state, action: PayloadAction<IAuth>) => {
            const accessToken = action.payload.accessToken
            localStorage.setItem("token", accessToken)
            state.accessToken = accessToken
            state.auth = true
        },
        logOut: (state) => {
            state.accessToken = ""
            state.auth = false
        }
    }
})

export const {setCredentials, logOut} = authSlice.actions
export default authSlice.reducer
export const selectCurrentAccessToken = (state: RootState) => state.auth.accessToken
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {IAuth} from "../../model/IAuth.ts";
import {setUser,} from "../user/userSlicer.ts";
import {IUser} from "../../model/IUser.ts";


const initialStateAuth: IAuth = {
    user: {
        id: 0,
        email: "",
        roleId: 0
    } as IUser,
    accessToken: "",
}


const authSlice = createSlice({
    name: "auth",
    initialState: {...initialStateAuth,auth:false},
    reducers: {
        setCredentials: (state, action: PayloadAction<IAuth>) => {
            const {user, accessToken} = action.payload
            setUser(user)
            console.log(accessToken)
            localStorage.setItem("token",accessToken)
            state.user = user
            state.accessToken = accessToken
            state.auth = true
        },
        logOut: (state) => {
            state.user = {
                id: 0,
                email: "",
                roleId: 0
            };
            state.accessToken = ""
            state.auth = false
        }
    }
})

export const {setCredentials, logOut} = authSlice.actions
export default authSlice.reducer
export const selectCurrentUser = (state:RootState) => state.auth.user
export const selectCurrentAccessToken = (state:RootState) => state.auth.accessToken
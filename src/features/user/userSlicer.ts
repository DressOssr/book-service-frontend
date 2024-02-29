import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {IUser} from "../../model/IUser.ts";


const initialStateAuth: IUser = {
    id: 0,
    email: "",
    roleId: 0
}

const userSlice = createSlice({
    name: "auth",
    initialState: initialStateAuth,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            const {id,email,roleId} = action.payload
            state.id = id
            state.email = email
            state.roleId = roleId

        },
        clearState: (state) => {
            state.id = 0
            state.email = ""
            state.roleId = 0
        }
    }
})

export const {setUser, clearState} = userSlice.actions
export default userSlice.reducer
export const selectCurrentUser = (state:RootState) => state.auth

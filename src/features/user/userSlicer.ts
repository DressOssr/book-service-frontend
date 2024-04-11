import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {IUser} from "../../model/IUser.ts";


const initialStateUser: IUser = {
    id: 0,
    email: "",
    roleId: 0
}

const userSlice = createSlice({
    name: "user",
    initialState: initialStateUser,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            const {id,email,roleId} = action.payload
            state.id = id
            state.email = email
            state.roleId = roleId

        },
        clearUser:()=>initialStateUser
    }
})

export const {setUser, clearUser} = userSlice.actions
export default userSlice.reducer
export const selectCurrentUserEmail = (state:RootState) => state.user.email

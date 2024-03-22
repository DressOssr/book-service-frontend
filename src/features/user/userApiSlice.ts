import {apiSlice} from "../../app/api/apiSlice.ts";
import {IUser} from "../../model/IUser.ts";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUser:builder.query<IUser, void>({
            query: () => ({
                url: '/users',
                method: 'GET'
            }),
        }),
    })
})


export const {
   useGetUserQuery,
} = userApiSlice
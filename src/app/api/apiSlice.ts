import {createApi, fetchBaseQuery,} from "@reduxjs/toolkit/query/react";
import {logOut, setCredentials} from "../../features/auth/authSlice.js";
import {IUser} from "../../model/IUser.ts";
import {RootState} from "../store.ts";


const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    credentials: "include",
    prepareHeaders: (headers, {getState}) => {
        const state = getState() as RootState
        const token = localStorage.getItem("token")
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers
    }
})

// @ts-ignore
const baseQueryWithReAuth = async (args, api, extraOption) => {
    let result = await baseQuery(args, api, extraOption);
    if (result?.error?.status === 401) {
        console.log("sending refresh token")
        const refreshResult = await baseQuery("/auth/refresh", api, extraOption);
        console.log(refreshResult);
        if (refreshResult?.data) {
            const user:IUser = api.getState().auth.user;
            api.dispatch(setCredentials({accessToken:refreshResult.data as string,user: user}));
            result = await baseQuery(args, api, extraOption);
        } else {
            api.dispatch(logOut())
            localStorage.removeItem("token")
        }
    }
    return result;
}

export const apiSlice = createApi({
    baseQuery:baseQueryWithReAuth,
    endpoints: () => ({}),
});

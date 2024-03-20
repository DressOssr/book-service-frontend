import {createApi, fetchBaseQuery,} from "@reduxjs/toolkit/query/react";
import {logOut, setCredentials, setIsLoading} from "../../features/auth/authSlice.js";
import {RootState} from "../store.ts";
import {Mutex} from "async-mutex";

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    credentials: "include",
    prepareHeaders: (headers, {getState}) => {
        const state = getState() as RootState
        const token = state.auth.accessToken
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers
    }
})

//@ts-ignore
const baseQueryWithReAuth = async (args, api, extraOption) => {
    api.dispatch(setIsLoading(true));
    let result = await baseQuery(args, api, extraOption);
    if (result?.error?.status === 401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            try {
                const refreshResult = await baseQuery("/auth/refresh", api, extraOption);
                if (refreshResult?.data) {
                    // @ts-ignore
                    api.dispatch(setCredentials({accessToken: refreshResult.data.accessToken}));
                    result = await baseQuery(args, api, extraOption);
                } else {
                    api.dispatch(logOut())
                }
            } finally {
                release();
            }
        } else {
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOption);
        }
    }
    api.dispatch(setIsLoading(false));
    return result;
}
export const apiSlice = createApi({
    baseQuery: baseQueryWithReAuth,
    endpoints: () => ({}),
    tagTypes: ['AuthLogout',"Cart"]
});

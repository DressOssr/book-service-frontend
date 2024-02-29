import {apiSlice} from "../../app/api/apiSlice.ts";
import {IAuth} from "../../model/IAuth.ts";
import {ISignIn} from "../../model/SignIn.ts";
import {ISignUp} from "../../model/ISignUp.ts";


export const authApiSlice = apiSlice.injectEndpoints({
    endpoints:builder =>({
         login:builder.mutation<IAuth,ISignIn>({
            query: credentials => ({
                url:'/auth/signin',
                method:'POST',
                body:{...credentials}
            })
        }),
        register:builder.mutation<IAuth,ISignUp>({
            query:credentials=>({
                url: 'auth/signup',
                method:'POST',
                body:{...credentials}
            })
        }),
        refreshToken:builder.query<IAuth,void>({
            query:()=>({
                url:'/auth/refresh',
                method:'GET'
            })
        }),
    })
})

export const {useLoginMutation,
    useRegisterMutation,
    useRefreshTokenQuery,
    useLazyRefreshTokenQuery} = authApiSlice
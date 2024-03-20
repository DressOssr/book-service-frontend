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
            }),
             invalidatesTags:['AuthLogout']
        }),
        register:builder.mutation<IAuth,ISignUp>({
            query:credentials=>({
                url: 'auth/signup',
                method:'POST',
                body:{...credentials}
            })
        }),
        refreshToken:builder.mutation<IAuth,void>({
            query:()=>({
                url:'/auth/refresh',
                method:'GET'
            })
        }),
        logout:builder.mutation<void,void>({
            query:()=>({
                url:'/auth/logout',
                method:'GET'
            }),
        }),
    })
})

export const {
    useLoginMutation,
    useRegisterMutation,
    useRefreshTokenMutation,
    useLogoutMutation,
    } = authApiSlice
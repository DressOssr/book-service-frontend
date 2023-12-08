import {apiSlice} from "../../app/api/apiSlice.ts";
import {IAuth} from "../../model/IAuth.ts";
import {ISignIn} from "../../model/SignIn.ts";


export const authApiSlice = apiSlice.injectEndpoints({
    endpoints:builder =>({
         login:builder.mutation<IAuth,ISignIn>({
            query: credentials => ({
                url:'/auth/signin',
                method:'POST',
                body:{...credentials}
            })
        })
    })
})

export const {useLoginMutation} = authApiSlice
import {apiSlice} from "../../app/api/apiSlice.ts";
import {IBook} from "../../model/IBook.ts";

export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        create: builder.mutation({
            query: (credentials: FormData) => ({
                url: '/book',
                method: 'POST',
                body: credentials,
                formData: true
            })
        })
    })
})

export const {useCreateMutation} = adminApiSlice
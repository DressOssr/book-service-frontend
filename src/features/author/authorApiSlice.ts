import {apiSlice} from "../../app/api/apiSlice.ts";
import {IAuthor} from "../../model/IAuthor.ts";

export const categoryApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAuthor: builder.query<IAuthor[], void>({
            query: () => ({
                url: '/author',
                method: 'GET',
            })
        })
    })
})
export const {useGetAuthorQuery} = categoryApiSlice


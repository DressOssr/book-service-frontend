import {apiSlice} from "../../app/api/apiSlice.ts";
import {ICategory} from "../../model/ICategory.ts";
import {IOptions} from "../../model/IOptions.ts";

export const categoryApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getCategory: builder.query<ICategory[], void>({
            query: () => ({
                url: '/category',
                method: 'GET',
            })
        })
    })
})
export const {useGetCategoryQuery} = categoryApiSlice


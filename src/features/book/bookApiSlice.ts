import {apiSlice} from "../../app/api/apiSlice.ts";
import {IAuthor} from "../../model/IAuthor.ts";
import {IBook} from "../../model/IBook.ts";

export const bookApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getBooks: builder.query<IBook[], void>({
            query: () => ({
                url: '/book',
                method: 'GET',
            })
        })
    })
})
export const {useGetBooksQuery} = bookApiSlice


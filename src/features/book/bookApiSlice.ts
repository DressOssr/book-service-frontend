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
        }),
        getBookById: builder.query<IBook, number>({
            query: (id) => ({
                url: `/book/${id}`,
                method: 'GET',
            })
        }),
    })
})
export const {useGetBooksQuery,useGetBookByIdQuery} = bookApiSlice


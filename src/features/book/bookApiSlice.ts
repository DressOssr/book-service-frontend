import {apiSlice} from "../../app/api/apiSlice.ts";
import {IAuthor} from "../../model/IAuthor.ts";
import {IBook} from "../../model/IBook.ts";
import {IImage} from "../../model/IImage.ts";
import {ICategory} from "../../model/ICategory.ts";
interface IBookApi extends IBook {
    authors: IAuthor[];
    categories: ICategory[];
}
export const bookApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getBooks: builder.query<IBookApi[], void>({
            query: () => ({
                url: '/book',
                method: 'GET',
            })
        }),
        getBookById: builder.query<IBookApi, number>({
            query: (id) => ({
                url: `/book/${id}`,
                method: 'GET',
            })
        }),
    })
})
export const {useGetBooksQuery,useGetBookByIdQuery} = bookApiSlice


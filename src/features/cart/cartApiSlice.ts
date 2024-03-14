import {apiSlice} from "../../app/api/apiSlice.ts";
import {ICart} from "../../model/ICart.ts";
import {IBook} from "../../model/IBook.ts";

const apiWithTag = apiSlice.enhanceEndpoints({addTagTypes: ['Cart']})

export const cartApiSlice = apiWithTag.injectEndpoints({
    endpoints: builder => ({
        addToCart: builder.mutation<ICart, number>({
            query: (id) => ({
                url: '/cart',
                method: 'POST',
                body: {bookId: id},
            }),
            invalidatesTags: ["Cart"]
        }),
        getCount: builder.query<number, void>({
            query: () => ({
                url: '/cart/count',
                method: 'GET'
            })
        }),
        getUserCartItem: builder.query<ICart[], void>({
            query: () => ({
                url: '/cart',
                method: 'GET',
            }),
            providesTags: ['Cart']
        }),
        deleteById: builder.mutation<void, number>({
            query: (id) => ({
                url: `/cart/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Cart']
        }),
    })
})
export const {
    useAddToCartMutation,
    useGetCountQuery,
    useGetUserCartItemQuery,
    useDeleteByIdMutation,

} = cartApiSlice


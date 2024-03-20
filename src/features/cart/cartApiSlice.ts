import {apiSlice} from "../../app/api/apiSlice.ts";
import {ICart} from "../../model/ICart.ts";
import {IBook} from "../../model/IBook.ts";


export const cartApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addToCart: builder.mutation<ICart, {id:number,bookPrice:number}>({
            query: (dto) => ({
                url: '/cart',
                method: 'POST',
                body: {bookId: dto.id, bookPrice: dto.bookPrice},
            }),
            invalidatesTags: ['Cart']
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
            providesTags: ['AuthLogout', 'Cart']
        }),
        deleteById: builder.mutation<void, number>({
            query: (id) => ({
                url: `/cart/${id}`,
                method: 'DELETE'
            }),
        }),
    })
})
export const {
    useAddToCartMutation,
    useGetCountQuery,
    useGetUserCartItemQuery,
    useDeleteByIdMutation,

} = cartApiSlice


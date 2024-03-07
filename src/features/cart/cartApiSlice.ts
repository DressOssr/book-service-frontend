import {apiSlice} from "../../app/api/apiSlice.ts";
import {ICart} from "../../model/ICart.ts";
import {IBook} from "../../model/IBook.ts";
import {ICartItems} from "../../model/ICartItems.ts";


export const cartApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addToCart: builder.mutation<ICart, number>({
            query: (id) => ({
                url: '/cart',
                method: 'POST',
                body: {bookId: id}
            })
        }),
        getCount: builder.query<number, void>({
            query: () => ({
                url: '/cart/count',
                method: 'GET'
            })
        }),
        getUserCartItem: builder.query<ICartItems[], void>({
            query: () => ({
                url: '/cart',
                method: 'GET'
            })
        }),
        deleteById: builder.mutation<void, number>({
            query: (id) => ({
                url: `/cart/${id}`,
                method: 'DELETE'
            })
        }),
    })
})
export const {
    useAddToCartMutation,
    useGetCountQuery,
    useGetUserCartItemQuery,
    useDeleteByIdMutation,

} = cartApiSlice


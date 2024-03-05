import {apiSlice} from "../../app/api/apiSlice.ts";
import {ICart} from "../../model/ICart.ts";

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
    })
})
export const {useAddToCartMutation,useGetCountQuery} = cartApiSlice


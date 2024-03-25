import {apiSlice} from "../../app/api/apiSlice.ts";
import {IUser} from "../../model/IUser.ts";
import {IOrder} from "../../model/IOrder.ts";


export interface OrderDto {
    books: {bookId: number, quantity: number}[];
    subtotal: number;
    shippingPrice: number;
}
export const orderApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createOrder:builder.mutation<void, OrderDto>({
            query: (dto) => ({
                url: '/order',
                method: 'POST',
                body: dto
            }),
        }),
        getOrder:builder.mutation<void, IOrder>({
            query: () => ({
                url: '/order',
                method: 'GET'
            }),
        }),
    })
})


export const {
    useCreateOrderMutation,
    useGetOrderMutation,
} = orderApiSlice
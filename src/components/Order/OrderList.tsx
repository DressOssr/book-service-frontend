import React from 'react';
import {useGetOrderQuery} from "../../features/order/ordeApiSlice.ts";
import OrderItemList from "./OrderItemList.tsx";

const OrderList = () => {
    const {data: orders, isLoading} = useGetOrderQuery();
    if (isLoading || !orders) return <div>Loading...</div>
    return (
        <>
            {orders.map((order) => {
                return (
                    <div
                        key={order.id}
                        className="border-b-2"
                    >
                        <OrderItemList
                            order={order.orderItems}
                        />
                    </div>
                )
            })}
        </>
    );
};

export default OrderList;
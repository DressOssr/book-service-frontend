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
                    <div className="m-1  mb-5 bg-gray-100">
                        <OrderItemList
                            key={order.id}
                            order={order.orderItems}
                        />
                    </div>
                )
            })}
        </>
    );
};

export default OrderList;
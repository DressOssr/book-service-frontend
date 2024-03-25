import React from 'react';
import {useGetOrderMutation} from "../features/order/ordeApiSlice.ts";

const OrderList = () => {
    const [data] = useGetOrderMutation();
    return (
        <>
        </>
    );
};

export default OrderList;
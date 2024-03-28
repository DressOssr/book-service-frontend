import React from 'react';
import {IOrderItem} from "../../model/IOrderItem.ts";
import OrderItem from "./OrderItem.tsx";

interface OrderItemListProps {
    order: IOrderItem[]
}

const OrderItemList: React.FC<OrderItemListProps> = ({order}) => {
    return (
        <>
            {order.map((orderItem) => {
                return (
                    <OrderItem
                        key={orderItem.id}
                        book={orderItem.book}
                        quantity={orderItem.quantity}
                    />
                )
            })}
        </>
    );
};

export default OrderItemList;
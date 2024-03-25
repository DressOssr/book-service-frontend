import {IOrderItem} from "./IOrderItem.ts";

export interface IOrder {
    id: number;
    subtotal: number;
    shippingPrice: number;
    userId: number;
    OrderItems: IOrderItem[];
}
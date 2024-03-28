import {IBook} from "./IBook.ts";

export interface IOrderItem {
    id: number;
    quantity: number;
    book:IBook;
    bookId: number;
    orderId: number;
}
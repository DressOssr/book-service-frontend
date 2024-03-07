import {ICart} from "./ICart.ts";
import {IBook} from "./IBook.ts";

export interface ICartItems extends ICart{
    book:IBook;
}
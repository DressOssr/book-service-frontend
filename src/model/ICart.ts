import {IBook} from "./IBook.ts";

export interface ICart{
  id:number;
  bookId:number;
  userId:number;
  quantity:number;
  book:IBook;
}
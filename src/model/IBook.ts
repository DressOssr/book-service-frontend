import {IAuthor} from "./IAuthor.ts";
import {ICategory} from "./ICategory.ts";
import {IImage} from "./IImage.ts";

export interface IBook {
    id: number
    title: string
    subtitle?: string
    price: number
    publishedDate: string
    description: string
    imageId: number
    publisher: string
    authorsId: IAuthor[]
    categoriesId: ICategory[],
    image:IImage
}

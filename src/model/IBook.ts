export interface IBook {
    title: string
    subtitle?: string
    price: number
    publishedDate: string
    description: string
    image: string
    publisher: string
    authorsId: number[]
    categoriesId: number[]
}

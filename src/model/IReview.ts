export interface IReview {
    id: number;
    bookId: number;
    userId: number;
    rating: number;
    name: string;
    reviewText: string;
    createdAt: string;
}
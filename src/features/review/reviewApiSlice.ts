import {apiSlice} from "../../app/api/apiSlice.ts";
import {IReview} from "../../model/IReview.ts";


interface ReviewDto {
    rating: number;
    bookId: number;
    reviewText: string;
    name: string;
}
export const reviewApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createReview:builder.mutation<void, ReviewDto>({
            query: (dto) => ({
                url: '/review',
                method: 'POST',
                body: dto
            }),
            invalidatesTags: ['Review']
        }),
        getReviews:builder.query<IReview[], number>({
            query: (id) => ({
                url: `/review/${id}`,
                method: 'GET'
            }),
            providesTags: ['Review']
        }),
    })
})

export const {
    useCreateReviewMutation,
    useGetReviewsQuery
} = reviewApiSlice
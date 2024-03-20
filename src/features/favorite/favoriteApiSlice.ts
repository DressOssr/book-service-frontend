import {apiSlice} from "../../app/api/apiSlice.ts";
import {IFavorite} from "../../model/IFavorite.ts";

export const favoriteApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        addFavorite: builder.mutation<IFavorite, number>({
            query: (bookId) => ({
                url: '/favorite',
                method: 'POST',
                body: {bookId},
            })
        }),
        getFavoriteByUser: builder.query<IFavorite[], void>({
            query: () => ({
                url: '/favorite',
                method: 'GET',
            }),
            providesTags: ['AuthLogout']
        }),
        removeFromFavorite: builder.mutation<void, number>({
            query: (id) => ({
                url: `/favorite/${id}`,
                method: 'DELETE',
            })
        }),
        checkIfExist: builder.query<boolean, number>({
            query: (id) => ({
                url: `/favorite/${id}`,
                method: 'GET',
            })
        })

    }),

})
export const {
    useAddFavoriteMutation,
    useGetFavoriteByUserQuery,
    useRemoveFromFavoriteMutation,
    useCheckIfExistQuery
} = favoriteApiSlice


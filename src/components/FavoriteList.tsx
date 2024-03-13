import React from 'react';
import {useGetFavoriteByUserQuery, useRemoveFromFavoriteMutation} from "../features/favorite/favoriteApiSlice.ts";
import {useAppDispatch} from "../app/hooks.ts";
import {removeFavorite} from "../features/favorite/favoriteSlice.ts";
import FavoriteItem from "./FavoriteItem.tsx";

const FavoriteList = () => {
        const {data, error, isLoading} = useGetFavoriteByUserQuery()
        const [removeFavoriteById] = useRemoveFromFavoriteMutation()
        const dispatch = useAppDispatch()
        const handelRemove = (id: number) => {
            try {
                removeFavoriteById(id)
                dispatch(removeFavorite(id))
            } catch (e) {
                console.log(e)
            }

        }
        if (isLoading || !data) return <div>Loading...</div>
        return (
            <>
                {data.map((favorite) => {
                    return (
                        <FavoriteItem
                            key={favorite.id}
                            bookId={favorite.bookId}
                            remove={() => handelRemove(favorite.id)}
                        />
                    )
                })}
            </>
        );
    }
;

export default FavoriteList;
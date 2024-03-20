import React from 'react';
import {useGetFavoriteByUserQuery, useRemoveFromFavoriteMutation} from "../features/favorite/favoriteApiSlice.ts";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {removeFavorite, selectFavoriteItems} from "../features/favorite/favoriteSlice.ts";
import FavoriteItem from "./FavoriteItem.tsx";

const FavoriteList = () => {
        const [removeFavoriteById] = useRemoveFromFavoriteMutation()
        const wishlist = useAppSelector(selectFavoriteItems)
        const dispatch = useAppDispatch()
        const handelRemove = (id: number) => {
            try {
                removeFavoriteById(id)
                dispatch(removeFavorite(id))
            } catch (e) {
                console.log(e)
            }
        }
        if (!wishlist) return <div>Loading...</div>
        return (
            <>
                {wishlist.map((favorite) => {
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
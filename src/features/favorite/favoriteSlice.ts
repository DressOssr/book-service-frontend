import {ICart} from "../../model/ICart.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store.ts";
import {IFavorite} from "../../model/IFavorite.ts";

interface FavoriteState {
    favoriteItems: IFavorite[]
}

const initialState: FavoriteState = {
    favoriteItems: []
}
const favoriteSlicer = createSlice({
    name: "favorite",
    initialState: initialState,
    reducers: {
        addFavoriteItem: (state, action: PayloadAction<IFavorite>) => {
            state.favoriteItems.push(action.payload)
        },
        setFavoriteItems: (state, action: PayloadAction<IFavorite[]>) => {
            state.favoriteItems = action.payload
        },
        removeFavorite: (state, action: PayloadAction<number>) => {
            state.favoriteItems = state.favoriteItems.filter(favorite => favorite.id !== action.payload)
        },
        clearFavorite: (state) => {
            state.favoriteItems = initialState.favoriteItems
        }
    }
})
export const {
    addFavoriteItem,
    setFavoriteItems,
    removeFavorite,
    clearFavorite
} = favoriteSlicer.actions
export default favoriteSlicer.reducer
export const selectFavoriteItems = (state: RootState) => state.favorite.favoriteItems
export const selectFavoriteItemsCount = (state: RootState) => state.favorite.favoriteItems.length
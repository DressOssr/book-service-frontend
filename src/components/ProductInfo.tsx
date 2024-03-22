import React, {useEffect, useState} from 'react';
import {addCartItem} from "../features/cart/cartSlicer.ts";
import {IImage} from "../model/IImage.ts";
import {IAuthor} from "../model/IAuthor.ts";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {useAddToCartMutation} from "../features/cart/cartApiSlice.ts";
import {ICategory} from "../model/ICategory.ts";
import {selectCartItems} from "../features/cart/cartSlicer.ts";
import {useAddFavoriteMutation, useCheckIfExistQuery} from "../features/favorite/favoriteApiSlice.ts";
import {addFavoriteItem, selectFavoriteItems} from "../features/favorite/favoriteSlice.ts";

interface ProductInfoProps {
    id: number
    title: string
    subtitle?: string
    price: number
    publishedDate: string
    description: string
    publisher: string
    authors: IAuthor[]
    categories: ICategory[],
    image: IImage
}


const  ProductInfo: React.FC<ProductInfoProps> = (props) => {
    const dispatch = useAppDispatch();
    const [addToCartOnDb] = useAddToCartMutation();
    const [addToFavoriteOnDb] = useAddFavoriteMutation();
    const cartItems = useAppSelector(selectCartItems)
    const favoriteItems = useAppSelector(selectFavoriteItems)
    const [bookExistsInCart, setBookExistsInCart] = useState<boolean>();
    const [favoriteIsExist, setFavoriteIsExist] = useState<boolean>()


    useEffect(() => {
        setBookExistsInCart(cartItems.some((item) => item.bookId === props.id))
    }, [cartItems])

    useEffect(() => {
        setFavoriteIsExist(favoriteItems.some((item) => item.bookId === props.id))
    }, [favoriteItems])
    const handleAddToCart = async () => {
        const cart = await addToCartOnDb({id: props.id, bookPrice: Number(props.price)})
        if ('data' in cart) {
            dispatch(addCartItem(cart.data))
            setBookExistsInCart(true)
        } else {
            console.log(cart)
        }
    }
    const handleAddToFavorite = async () => {
        const favorite = await addToFavoriteOnDb(props.id)
        if ('data' in favorite) {
            setFavoriteIsExist(true);
            dispatch(addFavoriteItem(favorite.data));
        } else {
            console.log(favorite)
        }
    }
    return (
        <div className="flex flex-col md:flex-row -mx-4 ">
            <div className="md:flex-1 px-4">
                <div className="rounded-lg bg-gray-300 mb-4">
                    <img className="w-full h-96 p-1 shadow-lg object-contain"
                         src={"data:image/png;base64," + props.image.buffer}
                         alt={props.image.fileName}/>
                </div>
            </div>
            <div className="md:flex-1 relative px-4">
                <h2 className="text-3xl font-bold text-gray-800 ">{props.title}</h2>
                <small
                    className="text-gray-600">{props.authors.map(author => `${author.firstName} ${author.lastName} `)}</small>
                <p className="text-gray-600 text-sm mb-4">
                    {props.subtitle}
                </p>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 ">Price:</span>
                        <span className="text-gray-600">${props.price}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700">Availability:</span>
                        <span className="text-gray-600">In Stock</span>
                    </div>
                </div>
                <div className="mb-4">
                    <span className="font-bold text-gray-700 ">Product Description:</span>
                    <p className="text-gray-600  text-sm mt-2">
                        {props.description}
                    </p>
                </div>
                <div className="flex justify-center">
                    <div className="w-1/2 ">
                        {bookExistsInCart
                            ?
                            <button
                                className=" w-full bg-gray-700 d text-white py-2 px-4 font-bold hover:bg-gray-800 ">
                                In Cart
                            </button>
                            :
                            <button
                                onClick={handleAddToCart}
                                className=" w-full bg-gray-900 d text-white py-2 px-4 font-bold hover:bg-gray-800 ">
                                Add to Cart
                            </button>
                        }
                        {favoriteIsExist ?
                            <button
                                className="mt-2 w-full bg-gray-900 d text-white py-2 px-4 font-bold hover:bg-gray-800 ">
                                In a Favorite
                            </button>
                            :
                            <button
                                onClick={handleAddToFavorite}
                                className="mt-2 w-full bg-gray-900 d text-white py-2 px-4 font-bold hover:bg-gray-800 ">
                                Add to Favorite
                            </button>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
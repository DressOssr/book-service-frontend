import React from 'react';
import {addCartItem} from "../features/cart/cartSlicer.ts";
import {IImage} from "../model/IImage.ts";
import {IAuthor} from "../model/IAuthor.ts";
import {useAppDispatch} from "../app/hooks.ts";
import {useAddToCartMutation} from "../features/cart/cartApiSlice.ts";
import {ICategory} from "../model/ICategory.ts";

interface ProductInfoProps{
    id: number
    title: string
    subtitle?: string
    price: number
    publishedDate: string
    description: string
    publisher: string
    authors: IAuthor[]
    categories: ICategory[],
    image:IImage
}


const ProductInfo:React.FC<ProductInfoProps> = (props) => {
    const dispatch = useAppDispatch()
    const [addToCartOnDb] = useAddToCartMutation();
    const  handleAddToCart = async () => {
        const cart = await addToCartOnDb(props.id)
        if('data' in cart) {
            dispatch(addCartItem(cart.data))
        }
        else {
            console.log(cart.error)
        }
    }
    return (
        <div className="flex flex-col md:flex-row -mx-4">
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
                        <button
                            onClick={handleAddToCart}
                            className=" w-full bg-gray-900 d text-white py-2 px-4 font-bold hover:bg-gray-800 ">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
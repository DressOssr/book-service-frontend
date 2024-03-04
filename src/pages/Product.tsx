import React from 'react';
import {useParams} from "react-router";
import {useGetBookByIdQuery} from "../features/book/bookApiSlice.ts";
import {data} from "autoprefixer";

const Product = () => {
    const {id} = useParams();
    const {data: book, error, isLoading} = useGetBookByIdQuery(Number(id));
    const handleAddToCart = () => {
        console.log('Add to cart')
    }
    if (!book || isLoading){
        return <h1>Loading...</h1>
    }
    return (
        <div className="container mx-auto px-4 m-2">
            <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                    <div className="rounded-lg bg-gray-300 mb-4">
                        <img className="w-full h-96 p-1 shadow-lg object-contain"
                             src={"data:image/png;base64," + book.image.buffer}
                             alt={book.image.fileName}/>
                    </div>
                </div>
                <div className="md:flex-1 px-4">
                    <h2 className="text-3xl font-bold text-gray-800 ">{book.title}</h2>
                    <small className="text-gray-600">{book.authors.map(author=>`${author.firstName} ${author.lastName} `)}</small>
                    <p className="text-gray-600 text-sm mb-4">
                        {book.subtitle}
                    </p>
                    <div className="flex mb-4">
                        <div className="mr-4">
                            <span className="font-bold text-gray-700 ">Price:</span>
                            <span className="text-gray-600">${book.price}</span>
                        </div>
                        <div>
                            <span className="font-bold text-gray-700">Availability:</span>
                            <span className="text-gray-600">In Stock</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <span className="font-bold text-gray-700 ">Product Description:</span>
                        <p className="text-gray-600  text-sm mt-2">
                            {book.description}
                        </p>
                    </div>
                    <div className="mb-4 flex justify-center">
                        <div className="w-1/2 ">
                            <button
                                onClick={handleAddToCart}
                                className="w-full bg-gray-900 d text-white py-2 px-4  font-bold hover:bg-gray-800 ">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
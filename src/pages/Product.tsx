import React from 'react';
import {useParams} from "react-router";
import {useGetBookByIdQuery} from "../features/book/bookApiSlice.ts";
import ProductInfo from "../components/Product/ProductInfo.tsx";

const Product = () => {
    const {id:bookId} = useParams();
    const {data: book, error, isLoading} = useGetBookByIdQuery(Number(bookId));
    if (!book || isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div className="container mx-auto px-4 m-2">
            <ProductInfo  {...book}/>
        </div>
    );
};

export default Product;
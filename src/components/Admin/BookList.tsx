import React from 'react';
import {useGetBooksQuery} from "../../features/book/bookApiSlice.ts";

const BookList = () => {
    const {data,isLoading} = useGetBooksQuery()
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            {data!.map(book => <div key={book.id}>{book.title}</div>)}
        </div>
    );
};

export default BookList;
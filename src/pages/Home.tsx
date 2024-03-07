import {useGetBooksQuery} from "../features/book/bookApiSlice.ts";
import Modal from "../components/UI/Modal/Modal.tsx";
import {useState} from "react";
import {logOut} from "../features/auth/authSlice.ts";
import Card from "../components/Card.tsx";

const Home = () => {
    const {data, isLoading} = useGetBooksQuery()
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div className="container content-center">
            {data!.map(book => {
                return (
                        <Card key={book.id} image={book.image} id={book.id} title={book.title} subtitle={book.subtitle}
                              price={book.price}/>
                )
            })}
        </div>
    );
};

export default Home;
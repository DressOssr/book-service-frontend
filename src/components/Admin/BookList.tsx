import {useGetBooksQuery} from "../../features/book/bookApiSlice.ts";


const BookList = () => {
    const {data, isLoading} = useGetBooksQuery()
    if (isLoading)
        return <div>Loading...</div>
    return (
        JSON.stringify(data)
    );
};

export default BookList;
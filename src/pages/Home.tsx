import {useGetBooksQuery} from "../features/book/bookApiSlice.ts";

const Home = () => {
    const {data, error} = useGetBooksQuery()
    return (
        <>
            {JSON.stringify(data)}
        </>
    );
};

export default Home;
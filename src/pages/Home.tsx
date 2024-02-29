import {useGetBooksQuery} from "../features/book/bookApiSlice.ts";
import Modal from "../components/UI/Modal/Modal.tsx";
import {useState} from "react";
import {logOut} from "../features/auth/authSlice.ts";

const Home = () => {
    const {data, isLoading} = useGetBooksQuery()
    const [showModal, setShowModal] = useState<boolean>(false);
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    function toggleModal() {
        setShowModal(!showModal);
    }
    return (
        <>
            <Modal onSubmit={()=>console.log("123")} title="Test" isOpen={showModal} onClose={toggleModal}>
                <div>
                   Content!
                </div>
            </Modal>
            <button onClick={toggleModal}>CLICK!</button>
        </>
    );
};

export default Home;
import React from 'react';
import {useGetBookByIdQuery} from "../features/book/bookApiSlice.ts";
import {useNavigate} from "react-router-dom";

interface FavoriteItemProps {
    bookId:number;
    remove: ()=> void;
}
const FavoriteItem:React.FC<FavoriteItemProps> = ({bookId,remove}) => {
    const {data:book, error, isLoading} = useGetBookByIdQuery(bookId)
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/product/'+bookId);
    }
    if (isLoading || !book) return <div>Loading...</div>
    return (
        <div className=" flex items-center justify-between border-b-2 pb-2 mb-4">
            <div className="flex items-center">
                <img src={"data:image/png;base64," + book.image.buffer} alt="Product 1" className="w-20 object-cover rounded"/>
                <div className="ml-4">
                    <p onClick={handleClick} className="font-semibold cursor-pointer hover:underline hover:text-blue-900">{book.title}</p>
                    <p className="text-gray-600">{book.price}</p>
                </div>
            </div>
            <button className="text-red-500 hover:text-red-700 ml-10"
                    onClick={remove}
            >
                Remove
            </button>
        </div>
    );
};

export default FavoriteItem;
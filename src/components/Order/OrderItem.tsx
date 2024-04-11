import React from 'react';
import {IBook} from "../../model/IBook.ts";
import {useNavigate} from "react-router-dom";


interface OrderItemProps {
    book:IBook;
    quantity:number;
}
const OrderItem:React.FC<OrderItemProps> = ({book,quantity}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/product/'+book.id);
    }
    return (
        <div className="flex items-center justify-between  pb-2 mb-4">
            <div className="flex items-center">
                <img src={"data:image/png;base64," + book.image.buffer} alt="Product 1"
                     className="w-20 object-cover rounded"/>
                <div className="ml-4">
                    <p onClick={handleClick} className="font-semibold cursor-pointer">{book.title}</p>
                    <p className="font-semibold">Price:{book.price}</p>
                    <p className="font-semibold">Quantity:{quantity}</p>
                </div>
            </div>
            <button
                className="p-3 m-1 mx-3 rounded-xl border-2 border-gray-900 bg-black text-white text-sm hover:bg-gray-800 hover:text-gray-200"
            >
                Add Review
            </button>
        </div>
    );
};

export default OrderItem;
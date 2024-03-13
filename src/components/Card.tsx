import React from 'react';
import {IImage} from "../model/IImage.ts";
import {useNavigate} from "react-router-dom";

interface CardProps {
    id: number;
    title: string;
    subtitle?: string;
    price: number;
    image: IImage;
}
const Card:React.FC<CardProps> = ({id,image,title,price}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('product/'+id);
    }
    return (
        <div
            className="m-5 cursor-pointer inline-block w-80 transform overflow-hidden rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg"
            onClick={handleClick}
        >

            <img className="h-96 w-full object-cover object-center"
                     src={"data:image/png;base64," + image.buffer}
                 alt={image.fileName}/>
            <div className="p-4">
                <h2 className="mb-2 text-lg font-medium  text-gray-900">{title}</h2>
                <div className="flex items-end">
                    <p className="mr-2 text-lg font-semibold text-gray-900">${price}.00</p>
                    <p className="text-base font-medium text-gray-500 line-through">$25.00</p>
                    <p className="ml-auto text-base font-medium text-green-500">20% off</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
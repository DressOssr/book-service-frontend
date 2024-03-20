import React from 'react';

interface CheckoutItemsProps {
    image: string;
    title: string;
    price: number;
    author: string;
}
const CheckoutItems:React.FC<CheckoutItemsProps> = ({image,title,price,author}) => {
    return (
        <div className="flex flex-col rounded-lg bg-white sm:flex-row">
            <img className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                 src={"data:image/png;base64," + image}
                 alt=""/>
            <div className="flex w-full flex-col px-4 py-4">
                <span className="font-semibold">{title}</span>
                <span className="float-right text-gray-400">{author}</span>
                <p className="text-lg font-bold">${price}</p>
            </div>
        </div>
    );
};

export default CheckoutItems;
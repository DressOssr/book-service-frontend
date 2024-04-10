import React from 'react';

interface ShippingMethodProps {
    handleShipping: () => void;
    title: string;
    delivery: string;
}

const ShippingMethod: React.FC<ShippingMethodProps> = ({handleShipping, title, delivery}) => {
    return (
        <div>
            <div className="relative m-1" onClick={handleShipping}>
                <input className="peer hidden" id={title} type="radio" name="radio" value={10} checked/>
                <span
                    className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                    className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                htmlFor={title}>
                    <div className="ml-5">
                        <span className="mt-2 font-semibold">{title}</span>
                        <p className="text-slate-500 text-sm leading-6">{delivery}</p>
                    </div>
                </label>
            </div>
        </div>
    );
};

export default ShippingMethod;
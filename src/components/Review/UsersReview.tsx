import React from 'react';
import StarRating from "../UI/StarRating/StarRating.tsx";

interface UserReviewProps {
    rating: number;
    text: string;
    author: string;
    date: string;
}

    const UsersReview:React.FC<UserReviewProps> = ({rating,text,date,author}) => {
        const userDate = new Date(date);
        return (
            <>
                <div className="flex flex-col md:flex-row justify-between w-full">
                    <div className="mt-2 md:mt-0">
                        <StarRating  rating={rating} readingOnly={true}/>
                    </div>
                </div>
                <div>
                    <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">
                        {text}
                    </p>
                    <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">

                        <div className="flex flex-col justify-start items-start space-y-2">
                            <p className="text-base font-medium leading-none text-gray-800">{author}</p>
                            <p className="text-sm leading-none text-gray-600">{userDate.toDateString()}</p>
                        </div>
                    </div>
                </div>
            </>
        );
    };

export default UsersReview;
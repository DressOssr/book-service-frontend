import React, {useState} from 'react';
import {FaStar} from "react-icons/fa";
interface StarRatingProps {
    setRating?: (rating: number) => void;
    rating: number;
    readingOnly: boolean;
}
const StarRating:React.FC<StarRatingProps> = ({setRating,rating,readingOnly}) => {
    const [hover, setHover] = useState<number >(0);
    const handleHover = (currentRating: number ) => {
        if(readingOnly ) return;
        setHover(currentRating);
    }
    const handleClick = (currentRating: number ) => {
        if(readingOnly || !setRating) return;
        setRating(currentRating );
    }
    return (
        <>
            {[...Array(5)].map((_,index) => {
                const currentRating = index + 1;
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            className="hidden"
                            value="1"
                             onClick={() => handleClick(currentRating)}
                        />
                        <FaStar
                            className={`${readingOnly ? "cursor-default" : "cursor-pointer"} inline p-1`}
                            size={40}
                            color={currentRating <= (hover || rating) ? 'yellow' : 'gray'}
                            onMouseEnter={() => handleHover(currentRating)}
                            onMouseLeave={() => handleHover(0)}
                        />

                    </label>
                );
            })}
        </>
    );
};

export default StarRating;
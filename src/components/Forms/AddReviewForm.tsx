import React, {FormEvent} from 'react';
import {useCreateReviewMutation} from "../../features/review/reviewApiSlice.ts";
import {IReview} from "../../model/IReview.ts";
import StarRating from "../UI/StarRating/StarRating.tsx";


interface AddReviewFormProps {
    bookId: number;
    onClose: () => void;
}

const AddReviewForm: React.FC<AddReviewFormProps> = ({bookId, onClose}) => {
    const [reviewText, setReviewText] = React.useState<string>('');
    const [userName, setUserName] = React.useState<string>('');
    const [rating, setRating] = React.useState<number>(0);
    const [createReview] = useCreateReviewMutation();
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const review = {
            bookId: bookId,
            reviewText: reviewText,
            name: userName,
            rating: rating,
        }
        try {
            await createReview(review)
            onClose();
        } catch (error) {
            console.error(error)
        }
    };
    return (
        <div className="p-4 ">
            <form onSubmit={handleSubmit}>
                <p className="block mb-2 text-sm font-medium text-gray-900">Rating</p>
                <StarRating setRating={(value) => setRating(value)} rating={rating} readingOnly={false}/>
                <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900">Comment</label>
                <textarea
                    className="w-full border rounded-md p-2 mb-4"
                    rows={4}
                    placeholder="Write your review..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    name="reviewText"
                    id="reviewText"
                />
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">First,Last name</label>
                <input
                    className="w-full border rounded-md p-2 mb-4"
                    type="text"
                    placeholder="Please enter your First and Last name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    name="name"
                    id="name"/>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
                    >
                        Submit Review
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddReviewForm;
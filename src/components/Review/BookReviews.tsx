import React, {useEffect, useState} from 'react';
import Modal from "../UI/Modal/Modal.tsx";
import AddReviewForm from "../Forms/AddReviewForm.tsx";
import {useGetReviewsQuery} from "../../features/review/reviewApiSlice.ts";
import UsersReview from "./UsersReview.tsx";

interface BookReviewProps {
    bookId: number;
}

const BookReviews: React.FC<BookReviewProps> = ({bookId}) => {
    const {data: reviews, isLoading} = useGetReviewsQuery(bookId);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [rating, setRating] = useState<number>(3);

    useEffect(() => {
        console.log(reviews)
    }, [reviews]);
    const closeModal = () => {
        setIsOpen(!isOpen);
    }
    if (isLoading) return <p>Loading...</p>
    return (
        <>
            <div className="px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto">
                <div className="flex flex-col justify-start items-start w-full space-y-8">
                    <div className="flex flex-col">
                        <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Reviews</p>
                        <button
                            className="m-2 p-2 rounded-xl hover:bg-gray-200 text-xl border border-black bg-gray-100"
                            onClick={closeModal}
                        >
                            Write review
                        </button>
                    </div>
                    <div className="w-full flex justify-start items-start flex-col bg-gray-50 p-8">
                        {reviews?.map((review) => {
                            return <UsersReview
                                text={review.reviewText}
                                author={review.name}
                                date={review.createdAt}
                                rating={review.rating}
                            />
                        })}
                    </div>
                </div>
            </div>
            <Modal title="Add Your Review" isOpen={isOpen} onClose={closeModal}>
                <AddReviewForm bookId={bookId} onClose={() => closeModal()}/>
            </Modal>
        </>
    );
};

export default BookReviews;
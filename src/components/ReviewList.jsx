import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";

const ReviewList = ({ searchParams }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getReviews(searchParams.get("category")).then(({ reviews }) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [searchParams]);

  if (isLoading) {
    return <p> Reviews loading...</p>;
  }

  return (
    <ul>
      {reviews.map((review) => {
        return <ReviewCard key={review.review_id} review={review} />;
      })}
    </ul>
  );
};

export default ReviewList;

import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";

const ReviewList = ({ searchParams }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getReviews(searchParams.get("category"), searchParams.get("sort_by"), searchParams.get("order"))
      .then(({ reviews }) => {
        setReviews(reviews);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [searchParams]);

  if (error) {
    return <p>404: That category was not found. Please press 'Home' to continue.</p>;
  }

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

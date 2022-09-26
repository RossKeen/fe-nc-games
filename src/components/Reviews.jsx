import { useEffect, useState } from "react";
import { getReviews } from "../utils/api";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then(({ reviews }) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <div className="reviews">
      <ul>
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    </div>
  );
};

export default Reviews;

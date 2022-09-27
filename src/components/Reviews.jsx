import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getReviews } from "../utils/api";
import Filter from "./Filter";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    getReviews(searchParams.get("category")).then(({ reviews }) => {
      setReviews(reviews);
      setIsLoading(false);
    });
  }, [searchParams]);

  if (isLoading) return <p>Reviews loading....</p>;
  return (
    <div className="reviews">
      <Filter setSearchParams={setSearchParams} />
      <ul>
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    </div>
  );
};

export default Reviews;

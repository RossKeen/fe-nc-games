import { useState } from "react";
import { useParams } from "react-router-dom";
import ReviewBody from "./ReviewBody";
import ReviewComments from "./ReviewComments";

const ReviewItem = () => {
  const [error, setError] = useState(null);
  const { review_id } = useParams();

  return (
    <div className="review-item">
      <ReviewBody review_id={review_id} error={error} setError={setError} />
      <ReviewComments review_id={review_id} error={error} />
    </div>
  );
};

export default ReviewItem;

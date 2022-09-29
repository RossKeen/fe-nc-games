import { useParams } from "react-router-dom";
import ReviewBody from "./ReviewBody";
import ReviewComments from "./ReviewComments";

const ReviewItem = () => {
  const { review_id } = useParams();

  return (
    <div className="review-item">
      <ReviewBody review_id={review_id} />
      <ReviewComments review_id={review_id} />
    </div>
  );
};

export default ReviewItem;

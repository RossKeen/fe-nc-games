import { useParams } from "react-router-dom";
import ReviewBody from "./ReviewBody";

const ReviewItem = () => {
  const { review_id } = useParams();

  return (
    <div>
      <ReviewBody review_id={review_id} />
    </div>
  );
};

export default ReviewItem;

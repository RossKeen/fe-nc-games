import { useParams } from "react-router-dom";

const ReviewItem = () => {
  const { review_id } = useParams();

  return (
    <div>
      <h2>Rendering review {review_id}</h2>
    </div>
  );
};

export default ReviewItem;

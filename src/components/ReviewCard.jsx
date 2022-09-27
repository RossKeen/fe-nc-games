import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  return (
    <Link to={`/reviews/${review.review_id}`}>
      <li className="review-card">
        {review.title} by {review.owner}
      </li>
    </Link>
  );
};

export default ReviewCard;

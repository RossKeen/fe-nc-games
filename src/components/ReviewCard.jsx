const ReviewCard = ({ review }) => {
  return (
    <li className="review-card">
      {review.title} by {review.owner}
    </li>
  );
};

export default ReviewCard;

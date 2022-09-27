import { useEffect, useState } from "react";
import { getReviewById } from "../utils/api";
import { dateParser } from "../utils/utils";

const ReviewBody = ({ review_id }) => {
  const [review, setReview] = useState({});
  let postedDateStr;

  useEffect(() => {
    getReviewById(review_id).then(({ review }) => {
      setReview(review);
    });
  }, []);

  if (review.review_id) {
    postedDateStr = `Posted on ${dateParser(review.created_at)[0]} at ${dateParser(review.created_at)[1]}.`;
  }

  return (
    <article>
      <img className="article-img" src={review.review_img_url} alt={`article image for ${review.title}`}></img>
      <h2>{review.title}</h2>
      <p> by {review.owner}</p>
      <p className="posted-on">{postedDateStr}</p>
      <p>{review.votes} Kudos</p>
      <p className="review-body">{review.review_body}</p>
    </article>
  );
};

export default ReviewBody;

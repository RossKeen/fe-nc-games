import { useEffect, useState } from "react";
import useKudos from "../hooks/useKudos";
import { getReviewById } from "../utils/api";
import { dateParser } from "../utils/utils";

const ReviewBody = ({ review_id, error, setError }) => {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { kudos, changeKudos, kudosClicked, setKudosClicked } = useKudos("/reviews", review_id);
  let postedDateStr;

  const handleClick = (e) => {
    e.preventDefault();
    if (!kudosClicked) {
      changeKudos(+1);
      setKudosClicked(true);
    } else {
      changeKudos(-1);
      setKudosClicked(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id)
      .then(({ review }) => {
        setReview(review);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [review_id]);

  if (review.review_id) {
    postedDateStr = `Posted on ${dateParser(review.created_at)[0]} at ${dateParser(review.created_at)[1]}.`;
  }

  if (error) {
    return <p>404: Review not found...</p>;
  }

  if (isLoading) {
    return <p> Loading... </p>;
  }

  return (
    <article>
      <img className="article-img" src={review.review_img_url} alt={`${review.title} thumbnail`}></img>
      <h2>{review.title}</h2>
      <p> by {review.owner}</p>
      <p className="posted-on">{postedDateStr}</p>
      <p className="kudos">
        {kudos} Kudos{" "}
        <button
          className={kudosClicked ? "clicked-button" : undefined}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          +1
        </button>
      </p>

      <p className="review-body">{review.review_body}</p>
    </article>
  );
};

export default ReviewBody;

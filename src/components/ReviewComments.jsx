import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";

const ReviewComments = ({ review_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(review_id).then((res) => {
      setComments(res);
    });
  }, []);

  if (comments.length === 0) {
    return (
      <div>
        <h2>Comments:</h2>
        <p>There are no comments on this review yet. Why not post one?</p>
      </div>
    );
  }

  return (
    <div className="comments">
      <h2>Comments:</h2>
      <ul>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </div>
  );
};

export default ReviewComments;

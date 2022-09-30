import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

const ReviewComments = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  const [commentPosted, setCommentPosted] = useState(false);

  useEffect(() => {
    getComments(review_id).then((res) => {
      setComments(res);
      setCommentPosted(false);
    });
  }, [commentPosted]);

  if (comments.length === 0) {
    return (
      <div>
        <h2>Comments:</h2>
        <p>There are no comments on this review yet. Why not post one?</p>
        <CommentForm review_id={review_id} setCommentPosted={setCommentPosted} />
      </div>
    );
  }

  return (
    <div className="comments">
      <h2>Comments ({comments.length}):</h2>
      <CommentForm review_id={review_id} setCommentPosted={setCommentPosted} />
      <ul>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </div>
  );
};

export default ReviewComments;

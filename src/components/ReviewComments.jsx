import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

const ReviewComments = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  const [commentPosted, setCommentPosted] = useState(false);
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [commentDeleted, setCommentDeleted] = useState(false);

  useEffect(() => {
    getComments(review_id).then((res) => {
      setComments(res);
      setCommentSubmitted(false);
      setCommentDeleted(false);
    });
  }, [commentSubmitted, commentDeleted]);

  if (comments.length === 0) {
    return (
      <div>
        <h2>Comments:</h2>
        <p>There are no comments on this review yet. Why not post one?</p>
        <CommentForm review_id={review_id} setCommentPosted={setCommentPosted} setCommentSubmitted={setCommentSubmitted} />
      </div>
    );
  }

  return (
    <div className="comments">
      <h2>Comments ({comments.length}):</h2>
      <CommentForm review_id={review_id} setCommentPosted={setCommentPosted} commentPosted={commentPosted} setCommentSubmitted={setCommentSubmitted} />
      <ul>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} setCommentDeleted={setCommentDeleted} />;
        })}
      </ul>
    </div>
  );
};

export default ReviewComments;

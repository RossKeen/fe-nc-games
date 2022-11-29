import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

const ReviewComments = ({ review_id, error }) => {
  const [comments, setComments] = useState([]);
  const [commentPosted, setCommentPosted] = useState(false);
  const [commentSubmitted, setCommentSubmitted] = useState(false);
  const [commentDeleted, setCommentDeleted] = useState(false);
  const [commentDeletedConfirmation, setCommentDeletedConfirmation] = useState(false);
  const [commentError, setCommentError] = useState(null);

  useEffect(() => {
    getComments(review_id)
      .then((res) => {
        setComments(res);
        setCommentSubmitted(false);
        setCommentDeleted(false);
      })
      .catch((err) => {
        setCommentError(err);
      });
  }, [commentSubmitted, commentDeleted]);

  if (error) {
    return null;
  }

  if (commentError) {
    return <p>Error fetching comments...</p>;
  }

  if (error) {
    return <p>Error fetching comments. Please reload and try again.</p>;
  }

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
      {commentDeletedConfirmation ? <p>Comment deleted successfully!</p> : null}
      <ul>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} setCommentDeleted={setCommentDeleted} setCommentDeletedConfirmation={setCommentDeletedConfirmation} />;
        })}
      </ul>
    </div>
  );
};

export default ReviewComments;

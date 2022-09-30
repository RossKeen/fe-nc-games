import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { postComment } from "../utils/api";

const CommentForm = ({ review_id, commentPosted, setCommentPosted }) => {
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useContext(UserContext);

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    postComment(review_id, newComment, user)
      .then(() => {
        setCommentPosted(true);
        setIsLoading(false);
        setNewComment("");
      })
      .catch((err) => {
        setError(err);
      });
  };

  if (error) {
    return <p>An error occurred. Please refresh the page and try again.</p>;
  }
  if (isLoading) {
    return <p>Posting comment...</p>;
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <textarea required="true" placeholder="Add a comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)}></textarea>
      <button type="submit">Post comment</button>
      {commentPosted ? <p>Comment posted!</p> : null}
    </form>
  );
};

export default CommentForm;

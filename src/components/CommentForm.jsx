import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { postComment } from "../utils/api";

const CommentForm = ({ review_id, setCommentPosted }) => {
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useContext(UserContext);

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    postComment(review_id, newComment, user).then(() => {
      setCommentPosted(true);
      setIsLoading(false);
    });
  };

  if (isLoading) {
    return <p>Posting comment...</p>;
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <textarea placeholder="Add a comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)}></textarea>
      <br></br>
      <button type="submit">Post comment</button>
    </form>
  );
};

export default CommentForm;

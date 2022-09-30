import { useContext, useState } from "react";
import { UserContext } from "../contexts/User";
import { deleteComment } from "../utils/api";
import { dateParser } from "../utils/utils";

const CommentCard = ({ comment, setCommentDeleted }) => {
  const { user } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e) => {
    setIsLoading(true);
    e.preventDefault();
    deleteComment(comment.comment_id)
      .then(() => {
        setCommentDeleted(true);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  };

  if (error) {
    return <p>Comment deletion failed. Please refresh the page and try again.</p>;
  }

  if (isLoading) {
    return <p>Deleting...</p>;
  }

  return (
    <li className="comment-card">
      <h3>{comment.author}</h3>
      <p className="posted-on">{`Posted on ${dateParser(comment.created_at)[0]} at ${dateParser(comment.created_at)[1]}`}</p>
      {user.username === comment.author ? (
        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Delete comment
        </button>
      ) : null}
      <p>{comment.body}</p>
    </li>
  );
};

export default CommentCard;

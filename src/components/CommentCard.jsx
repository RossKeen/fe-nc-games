import { dateParser } from "../utils/utils";

const CommentCard = ({ comment }) => {
  return (
    <li className="comment-card">
      <h3>{comment.author}</h3>
      <p className="posted-on">{`Posted on ${dateParser(comment.created_at)[0]} at ${dateParser(comment.created_at)[1]}`}</p>
      <p>{comment.body}</p>
    </li>
  );
};

export default CommentCard;

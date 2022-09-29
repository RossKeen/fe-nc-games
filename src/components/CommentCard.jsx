const CommentCard = ({ comment }) => {
  return (
    <li>
      <h3>{comment.author}</h3>
      <p>{comment.created_at}</p>
      <p>{comment.body}</p>
    </li>
  );
};

export default CommentCard;

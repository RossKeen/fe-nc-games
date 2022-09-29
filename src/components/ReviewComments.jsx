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

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </div>
  );
};

export default ReviewComments;

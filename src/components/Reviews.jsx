import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";
import ReviewList from "./ReviewList";

const Reviews = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="reviews">
      <Filter searchParams={searchParams} setSearchParams={setSearchParams} />
      <ReviewList searchParams={searchParams} />
    </div>
  );
};

export default Reviews;

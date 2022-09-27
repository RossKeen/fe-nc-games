import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../utils/api";

const Filter = ({ setSearchParams }) => {
  const [categories, setCategories] = useState([]);

  const handleClick = (e) => {
    setSearchParams(e.target.text);
  };

  useEffect(() => {
    getCategories().then(({ categories }) => {
      setCategories(categories);
    });
  }, []);

  return (
    <div className="filter" id="filter">
      <p>Choose a category: </p>
      <Link
        onClick={(e) => {
          handleClick(e);
        }}
        key="All"
        className="link"
        to={"/reviews"}
      >
        All
      </Link>
      {categories.map((category) => {
        return (
          <Link
            onClick={(e) => {
              handleClick(e);
            }}
            key={category.slug}
            className="link"
            to={`/reviews?category=${category.slug}`}
          >
            {category.slug}
          </Link>
        );
      })}
    </div>
  );
};

export default Filter;

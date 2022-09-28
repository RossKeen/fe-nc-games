import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCategories } from "../utils/api";

const Filter = ({ searchParams, setSearchParams }) => {
  const [categories, setCategories] = useState([]);
  const currCategory = searchParams.get("category");

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
        className={currCategory === null ? "link-selected" : "link"}
        to={"/reviews"}
      >
        All
      </Link>
      {categories.map((category) => {
        return (
          <Link
            to={`/reviews?category=${category.slug}`}
            onClick={(e) => {
              handleClick(e);
            }}
            key={category.slug}
            className={currCategory === category.slug ? "link-selected" : "link"}
          >
            {category.slug}
          </Link>
        );
      })}
    </div>
  );
};

export default Filter;

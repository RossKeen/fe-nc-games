import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getCategories } from "../utils/api";

const Filter = ({ setSearchParams }) => {
  const [categories, setCategories] = useState([]);
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleClick = (e) => {
    setSearchParams(e.target.text);
    if (buttonPressed) {
      setButtonPressed(false);
    } else {
      setButtonPressed(true);
    }
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
        className={buttonPressed ? "link-selected" : "link"}
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
            className={buttonPressed ? "link-selected" : "link"}
          >
            {category.slug}
          </Link>
        );
      })}
    </div>
  );
};

export default Filter;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../utils/api";
import { handleURLParams } from "../utils/utils";

const Filter = ({ searchParams, setSearchParams }) => {
  const [categories, setCategories] = useState([]);
  const [buttonPressed, setButtonPressed] = useState(false);
  const currCategory = searchParams.get("category");

  const handleClick = (e) => {
    e.preventDefault();
    setSearchParams((currParams) => {
      if (e.target.text === "All") {
        currParams.delete("category");
        return currParams;
      }
      handleURLParams(currParams, "category", e.target.text);
      return currParams;
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchParams((currParams) => {
      handleURLParams(currParams, "sort_by", e.target.value);
      return currParams;
    });
  };

  const toggleButton = (e) => {
    e.preventDefault();
    buttonPressed ? setButtonPressed(false) : setButtonPressed(true);
    if (!buttonPressed) {
      setSearchParams((currParams) => {
        currParams.append("order", "asc");
        return currParams;
      });
    } else {
      setSearchParams((currParams) => {
        currParams.delete("order");
        return currParams;
      });
    }
  };

  useEffect(() => {
    setSearchParams({ sort_by: "created_at" });
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
      <p>Sort by:</p>
      <select
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <option>created_at</option>
        <option>comment_count</option>
        <option>votes</option>
      </select>
      <button
        onClick={(e) => {
          toggleButton(e);
        }}
      >
        {buttonPressed ? "Ascending" : "Descending"}
      </button>
    </div>
  );
};

export default Filter;

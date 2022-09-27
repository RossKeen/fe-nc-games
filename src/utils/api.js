const axios = require("axios");

const gamesAPI = axios.create({
  baseURL: "https://rk-board-games.herokuapp.com/api",
});

const getReviews = (category) => {
  return gamesAPI.get("/reviews", { params: { category: category } }).then(({ data }) => {
    return data;
  });
};

const getCategories = () => {
  return gamesAPI.get("/categories").then(({ data }) => {
    return data;
  });
};

module.exports = { getReviews, getCategories };

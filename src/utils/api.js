const axios = require("axios");

const gamesAPI = axios.create({
  baseURL: "https://rk-board-games.herokuapp.com/api",
});

const getReviews = () => {
  return gamesAPI.get("/reviews").then(({ data }) => {
    return data;
  });
};

module.exports = { getReviews };

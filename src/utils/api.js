const axios = require("axios");

const gamesAPI = axios.create({
  baseURL: "https://rk-board-games.herokuapp.com/api",
});

const getReviews = (category) => {
  return gamesAPI.get("/reviews", { params: { category: category } }).then(({ data }) => {
    return data;
  });
};

const getReviewById = (id) => {
  return gamesAPI.get(`/reviews/${id}`).then(({ data }) => {
    return data;
  });
};

const getCategories = () => {
  return gamesAPI.get("/categories").then(({ data }) => {
    return data;
  });
};

const getKudos = (path, id) => {
  return gamesAPI.get(`${path}/${id.toString()}`).then(({ data }) => {
    return data.review.votes;
  });
};

const patchKudos = (path, id, change) => {
  return gamesAPI.patch(`${path}/${id.toString()}`, { inc_votes: change }).then((res) => res);
};

const getComments = (review_id) => {
  return gamesAPI.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

module.exports = { getReviews, getReviewById, getCategories, getKudos, patchKudos, getComments };

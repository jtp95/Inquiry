const userQueries = require("./user");
const postQueries = require("./post");
const commentQueries = require("./comment");
const likeQueries = require("./like");

module.exports = {
  ...userQueries,
  ...postQueries,
  ...commentQueries,
  ...likeQueries,
};
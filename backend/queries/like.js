const { Like } = require("../models");

// Like a Post or Comment
async function likeEntity(userId, entityId, type) {
  try {
    const like = await Like.create({ userId, entityId, type });
    console.log("Like added:", like.toJSON());
    return like;
  } catch (error) {
    console.error("Error liking entity:", error);
  }
}

// Unlike a Post or Comment
async function unlikeEntity(userId, entityId, type) {
  try {
    const result = await Like.destroy({
      where: { userId, entityId, type },
    });
    console.log(`Unlike result: ${result}`);
    return result;
  } catch (error) {
    console.error("Error unliking:", error);
  }
}

// Get Likes for a Specific Entity
async function getLikesForEntity(entityId, type) {
  try {
    const likes = await Like.findAll({
      where: { entityId, type },
    });
    console.log(`Likes for ${type} ${entityId}:`, likes.length);
    return likes;
  } catch (error) {
    console.error("Error fetching likes:", error);
  }
}

module.exports = { likeEntity, unlikeEntity, getLikesForEntity };
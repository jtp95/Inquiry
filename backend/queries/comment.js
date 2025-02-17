const { Comment, User, Like } = require("../models");

// Create a Comment
async function createComment(userId, postId, content, role = 0) {
  try {
    const comment = await Comment.create({ userId, postId, content, role });
    console.log("Comment created:", comment.toJSON());
    return comment;
  } catch (error) {
    console.error("Error creating comment:", error);
  }
}

// Retrieve All Comments for a Post
async function getCommentsForPost(postId) {
  try {
    const comments = await Comment.findAll({
      where: { postId },
      include: [User, Like],
    });
    console.log(`Comments for Post ${postId}:`, comments.length);
    return comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
}

module.exports = { createComment, getCommentsForPost };
const { Post, User, Comment, Like } = require("../models");

// Create a Post
async function createPost(userId, content) {
  try {
    const post = await Post.create({ userId, content });
    console.log("Post created:", post.toJSON());
    return post;
  } catch (error) {
    console.error("Error creating post:", error);
  }
}

// Retrieve All Posts with User and Comments
async function getAllPosts() {
  try {
    const posts = await Post.findAll({ include: [User, Comment, Like] });
    console.log("All posts:", posts.map((p) => p.toJSON()));
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

// Delete a Post and Its Comments/Likes
async function deletePost(postId) {
  try {
    await Comment.destroy({ where: { postId } });
    await Like.destroy({ where: { entityId: postId, type: "post" } });
    await Post.destroy({ where: { id: postId } });
    console.log(`Post ${postId} and related comments/likes deleted.`);
  } catch (error) {
    console.error("Error deleting post:", error);
  }
}

module.exports = { createPost, getAllPosts, deletePost };
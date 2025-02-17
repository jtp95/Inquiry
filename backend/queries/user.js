const { User, Post, Comment, Like } = require("../models");

// Create a User
async function createUser(username, email, password, role = 0) {
  try {
    const user = await User.create({ username, email, password, role });
    console.log("User created:", user.toJSON());
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

// Retrieve a User with their Posts, Comments, and Likes
async function getUserById(userId) {
  try {
    const user = await User.findByPk(userId, { include: [Post, Comment, Like] });
    console.log("User found:", user ? user.toJSON() : "Not found");
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

// Delete a User and Cascade Delete Related Data
async function deleteUser(userId) {
    try {
        const deleted = await User.destroy({ where: { id: userId } });

        if (deleted) {
        console.log(`User ${userId} deleted successfully.`);
        } else {
        console.log(`User ${userId} not found.`);
        }
        return deleted;
    } catch (error) {
        console.error("Error deleting user:", error);
    }
}
  
module.exports = { createUser, getUserById, deleteUser };
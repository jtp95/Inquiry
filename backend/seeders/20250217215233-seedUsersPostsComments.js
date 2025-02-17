"use strict";

const { faker } = require("@faker-js/faker");
const { User, Post, Comment, Like } = require("../models");
const bcrypt = require("bcryptjs"); // Ensure bcryptjs is installed

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Create 10 Users
    const users = [];
    for (let i = 0; i < 10; i++) {
      users.push({
        id: faker.string.uuid(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: await bcrypt.hash("password123", 10), // Default hashed password
        role: faker.helpers.arrayElement([0, 1]), // Random citizen (0) or imposter (1)
        points: faker.number.int({ min: 0, max: 100 }),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("Users", users);

    // Create 20 Posts
    const posts = [];
    users.forEach((user) => {
      for (let i = 0; i < 2; i++) {
        posts.push({
          id: faker.string.uuid(),
          userId: user.id,
          content: faker.lorem.sentence(),
          status: "open",
          likesCount: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    });
    await queryInterface.bulkInsert("Posts", posts);

    // Create 40 Comments
    const comments = [];
    posts.forEach((post) => {
      for (let i = 0; i < 2; i++) {
        const randomUser = faker.helpers.arrayElement(users);
        comments.push({
          id: faker.string.uuid(),
          userId: randomUser.id,
          postId: post.id,
          content: faker.lorem.sentence(),
          role: faker.helpers.arrayElement([0, 1]), // Random user or AI-generated
          likesCount: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    });
    await queryInterface.bulkInsert("Comments", comments);

    // Create 50 Likes (Randomly distributed)
    const likes = [];
    for (let i = 0; i < 50; i++) {
      const randomUser = faker.helpers.arrayElement(users);
      const randomPostOrComment = faker.helpers.arrayElement([...posts, ...comments]);
      likes.push({
        id: faker.string.uuid(),
        userId: randomUser.id,
        entityId: randomPostOrComment.id,
        type: randomPostOrComment.hasOwnProperty("postId") ? "comment" : "post",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("Likes", likes);
  },

  async down(queryInterface, Sequelize) {
    // Rollback the seeding
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Posts", null, {});
    await queryInterface.bulkDelete("Comments", null, {});
    await queryInterface.bulkDelete("Likes", null, {});
  },
};
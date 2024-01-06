const express = require("express");

module.exports = (usersModel) => {
  const router = express.Router();

  // Get Method for all users
  router.get("/", async (req, res) => {
    try {
      const users = await usersModel.getUsers();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });

  // Get a single user by ID
  router.get("/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
      const user = await usersModel.getUserById(userId);
      if (user) {
        console.log(user);
        res.json(user);
      } else {
        res.status(404).json({ Message: "User not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });

  // Create a new user
  router.post("/", async (req, res) => {
    const newUser = req.body;
    console.log(newUser);

    try {
      await usersModel.createUser(newUser);
      res.json({ message: "New user created" });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  });

  // Update a user by ID
  router.put("/:userId", async (req, res) => {
    const userId = req.params.userId;
    const updatedUser = req.body;

    try {
      await usersModel.updateUserById(userId, updatedUser);
      res.json({ message: "User updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  });

  // Delete a user by ID
  router.delete("/:userId", async (req, res) => {
    const userId = req.params.userId;

    try {
      await usersModel.deleteUserById(userId);
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  });

  return router;
};

// database.js
const database = () => {
  const knex = require("knex")({
    client: "mysql2",
    connection: process.env.DATABASE_URL,
  });

  // Tables
  const users = "Users";

  // Get the list of users
  const getUsers = () => {
    return knex(users).select();
  };

  // Get a single user by ID
  const getUserById = (userId) => {
    return knex(users).where({ user_id: userId }).first();
  };

  // Create a new user
  const bcrypt = require("bcrypt");
  const saltRounds = process.env.BCRYPT_SALT_ROUNDS; // Number of rounds

  const createUser = async ({ name, last_name, email, password }) => {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, Number(saltRounds));

    // Insert the user into the database with the hashed password
    return knex(users).insert({
      name: name,
      last_name: last_name,
      email: email,
      password: hashedPassword,
    });
  };

  return { getUsers, createUser, getUserById }; // Include knex instance
};

module.exports = {
  database,
};

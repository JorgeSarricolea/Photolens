// database.js
const database = () => {
  const knex = require("knex")({
    client: "mysql",
    connection: process.env.DATABASE_URL,
  });

  // Tables
  const table = "Users";

  // To get the list of users
  const getUsers = () => {
    return knex(table).select();
  };

  // To create a new user
  const bcrypt = require("bcrypt");
  const saltRounds = process.env.BCRYPT_SALT_ROUNDS; // Number of rounds

  const createUser = async ({ name, last_name, email, password }) => {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, Number(saltRounds));

    // Insert the user into the database with the hashed password
    return knex(table).insert({
      name: name,
      last_name: last_name,
      email: email,
      password: hashedPassword,
    });
  };

  return { getUsers, createUser }; // Include knex instance
};

module.exports = {
  database,
};

// Import the all models
const createUsersModel = require("../models/users");

// Define a function to create the database instance
const database = () => {
  const knex = require("knex")({
    client: "mysql2",
    connection: process.env.DATABASE_URL,
  });

  // Generate the users model
  const usersModel = createUsersModel(knex);

  return { usersModel };
};

module.exports = {
  database,
};

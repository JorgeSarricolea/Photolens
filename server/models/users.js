module.exports = (knex) => {
  // Table
  const table = "Users";

  // Get the list of users
  const getUsers = () => {
    return knex(table).select();
  };

  // Get a single user by ID
  const getUserById = (userId) => {
    return knex(table).where({ user_id: userId }).first();
  };

  // Create a new user
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

  // Update a user by ID
  const updateUserById = (userId, updatedUserData) => {
    return knex(table).where({ user_id: userId }).update(updatedUserData);
  };

  // Delete a user by ID
  const deleteUserById = (userId) => {
    return knex(table).where({ user_id: userId }).del();
  };

  return { getUsers, createUser, getUserById, updateUserById, deleteUserById };
};

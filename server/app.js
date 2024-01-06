require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const { database } = require("./services/database");

const app = express();
const port = process.env.LOCAL_PORT;

app.use(bodyParser.json());

// Database knex instance
const db = database();

// Routes
const usersRoutes = require("./routes/users");
app.use("/users", usersRoutes(db.usersModel));

// Listener
app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

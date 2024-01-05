// app.js
const express = require("express");
const bodyParser = require("body-parser");
const { database } = require("./services/database");

const port = 3000;

const app = express();

app.use(bodyParser.json());

const db = database(); // Obtener la instancia knex

require("./routes")(app, db);

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

const express = require("express");

const app = express();
const port = 3000;

require("./routes")(app);

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});

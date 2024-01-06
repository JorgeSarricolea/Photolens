module.exports = function (app, db) {
  // Get all users
  app.get("/users", (req, res) => {
    res.json({ message: "list of users" });
  });

  // Create a new user
  app.post("/users", (req, res) => {
    const newUser = req.body;
    console.log(newUser);

    db.createUser(newUser)
      .then(() => {
        res.json({ message: "New user created" });
      })
      .catch((e) => {
        console.error(e); // Print the error in terminal
        res.status(500).json(e);
      });
  });
};

module.exports = function (app, db) {
  // Get Method for all photos
  app.get("/users", (req, res) => {
    db.getUsers()
      .then((users) => {
        console.log(users);
        res.json(users);
      })
      .catch((e) => res.status(500).send(e));
  });

  // Get a single user by ID
  app.get("/users/:userId", (req, res) => {
    const userId = req.params.userId;
    db.getUserById(userId)
      .then((user) => {
        if (user) {
          console.log(user);
          res.json(user);
        } else {
          res.status(404).json({ Message: "User not found" });
        }
      })
      .catch((e) => res.status(500).send(e));
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

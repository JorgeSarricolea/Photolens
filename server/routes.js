module.exports = function (app, db) {
  app.get("/", (req, res) => {
    res.json({ message: "OK" });
  });

  // GET Method
  app.get("/users", (req, res) => {
    res.json({ message: "list of users" });
  });

  // POST method
  app.post("/users", (req, res) => {
    const newUser = req.body;
    console.log(newUser);

    db.createUser(newUser)
      .then(() => {
        res.json({ message: "New user created" });
      })
      .catch((e) => {
        console.error(e); // Imprime el error en la consola
        res.status(500).json(e);
      });
  });
};

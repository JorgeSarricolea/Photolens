module.exports = function (app) {
  app.get("/", (req, res) => {
    res.status(200).json({ message: "OK" });
  });
};

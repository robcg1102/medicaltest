const Developer = require("../models/Developer");

const ControllerDeveloper = {
  allDevelopers: (req, res) => {
    Developer.find()
      .then((data) => {
        return res.json({ data });
      })
      .catch((err) => {
        return res.status(404).json({ err });
      });
  },
};

module.exports = ControllerDeveloper;

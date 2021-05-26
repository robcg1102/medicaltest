const Console = require("../models/Console");

const ControllerConsole = {
  allConsoles: (req, res) => {
    Console.find()
      .then((data) => {
        return res.json({ data });
      })
      .catch((err) => {
        return res.status(404).json({ err });
      });
  },
};

module.exports = ControllerConsole;

const cloudinary = require("../config/cloudinaryConfig");

const Videogame = require("../models/Videogame");
const Developer = require("../models/Developer");
const Console = require("../models/Console");

const ControllerVideogame = {
  allVideogames: (req, res) => {
    Videogame.find()
      .then((data) => {
        return res.json({ data });
      })
      .catch((err) => {
        return res.status(404).json({ err });
      });
  },
  getVideogame: (req, res) => {
    Videogame.findById(req.params.id)
      .then((data) => {
        return res.json({ data });
      })
      .catch((err) => {
        return res.json({ err });
      });
  },

  addVideogame: async (req, res) => {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "medicalminds",
      gravity: "faces",
      crop: "fill",
    });

    const { secure_url } = result;

    const developer = await Developer.findById(req.body.developer);
    const consoleItem = await Console.findById(req.body.console);
    Videogame.create({
      ...req.body,
      developer,
      image: secure_url,
      console: [consoleItem],
    })
      .then((data) => {
        return res.json({ data });
      })
      .catch((err) => {
        return res.json({ err });
      });
  },

  updateVideogame: async (req, res) => {
    const developer = await Developer.findById(req.body.developer);
    const consoleItem = await Console.findById(req.body.console);

    Videogame.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body, developer, console: [consoleItem] },
      { new: true }
    )
      .then((data) => {
        return res.json({ data });
      })
      .catch((err) => {
        return res.json({ err });
      });
  },

  deleteVideogame: (req, res) => {
    Videogame.findByIdAndDelete(req.params.id)
      .then((data) => {
        return res.json({ status: "VideogameDeleted" });
      })
      .catch((err) => {
        return res.json({ err });
      });
  },
};

module.exports = ControllerVideogame;

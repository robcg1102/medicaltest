const router = require("express").Router();
const upload = require("../config/multerConfig");

const ControllerVideogame = require("../controllers/videogame.controller")
const ControllerConsole = require("../controllers/console.controller");
const ControllerDeveloper = require("../controllers/developer.controller");

// Routes Videogame
router.get("/videogames", ControllerVideogame.allVideogames);

// CRUD Videogame
router.get("/videogames/:id", ControllerVideogame.getVideogame);
router.post("/videogames/add", upload.single("image"), ControllerVideogame.addVideogame);
router.put("/videogames/update/:id", ControllerVideogame.updateVideogame);
router.delete("/videogames/delete/:id", ControllerVideogame.deleteVideogame);

// Routes Console - Developer
router.get("/consoles", ControllerConsole.allConsoles);
router.get("/developers", ControllerDeveloper.allDevelopers)


module.exports = router;

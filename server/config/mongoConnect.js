const mongoose = require("mongoose");

const mongoConnect = () => {
  mongoose
    .connect(process.env.MONGO_URI || "mongodb://localhost/VideoGames", {
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then((data) => console.log(`Connected to DB ${data.connections[0].name}`))
    .catch((err) => console.log("Error al conectar a la base de datos: ", err));
};

module.exports = mongoConnect;

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

require("./config/mongoConnect")();

app.use(
  cors({
    origin: ["http://localhost:3000", ["https://medicaltest.netlify.app/"]],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", require("./routes/routes"));

app.listen(4000, () => {
  console.log("Corriendo en el puerto 4000");
});

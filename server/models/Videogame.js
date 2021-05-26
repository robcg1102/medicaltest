const { model, Schema } = require("mongoose");

const VideogameSchema = new Schema(
  {
    name: String,
    description: String,
    developer: {
      type: "Object",
      structure: {
        _id: {
          primaryKey: true,
          type: "Object",
          required: true,
        },
        name: {
          type: "string",
          required: true,
        },
      },
      required: true,
    },
    year: Number,
    console: {
      type: "Array",
      required: true,
    },
    image: String,
    is_active: { type: Boolean, default: true },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const Videogame = model("Videogame", VideogameSchema);
module.exports = Videogame;

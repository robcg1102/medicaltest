const { model, Schema } = require("mongoose");

const ConsoleSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const Console = model("Console", ConsoleSchema);
module.exports = Console;

const { model, Schema } = require("mongoose");

const DeveloperSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const Developer = model("Developer", DeveloperSchema);
module.exports = Developer;

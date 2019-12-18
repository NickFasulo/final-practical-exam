const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  type: { type: String, default: "" },
  animal_id: { type: Schema.Types.ObjectId, ref: "animal" }
});

module.exports = mongoose.model("animal", AnimalSchema);

const { Schema, model } = require("mongoose");

const Reaction = model("reaction", reactionSchema);

module.exports = Reaction;

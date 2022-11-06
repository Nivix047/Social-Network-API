const { ObjectID, ObjectId } = require("bson");
const { Schema, model } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: ObjectId,
  },
  reactionBody: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    date: Date,
    default: Date.now(),
  },
});

const Reaction = model("reaction", reactionSchema);

module.exports = Reaction;

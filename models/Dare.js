const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DareSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  pointValue: {
    type: Number,
    required: true
  },
  challengable: {
    type: Boolean,
    required: true
  },
  nsfw: {
    type: Boolean,
    required: true
  }
});

module.exports = Dare = mongoose.model('dare', DareSchema);

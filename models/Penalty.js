const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PenaltySchema = new Schema({
  text: {
    type: String,
    required: true
  }
});

module.exports = Penalty = mongoose.model('penalty', PenaltySchema);

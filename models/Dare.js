const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DareSchema = new Schema({
  text: {
    type: String,
    required: true
  }
});

module.exports = Dare = mongoose.model('dare', DareSchema);

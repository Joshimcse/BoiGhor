const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: {
    en: {
      type: String,
      required: true
    },
    bn: {
      type: String,
      required: true
    }
  },
  desc: {
    type: String,
    default: ''
  },
  dateOfBirth: {
    type: String,
    default: ''
  },
});

module.exports = mongoose.model('Author', authorSchema);

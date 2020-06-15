const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  title: {
    en: {
      type: String,
      required: true
    },
    bn: {
      type: String,
      required: true
    }
  },
  rank: {
    type: Number,
    unique: true
  },
  isActive: {
    type: Boolean,
    default: true,
    required: true
  }
});

module.exports = mongoose.model('Category', categorySchema);

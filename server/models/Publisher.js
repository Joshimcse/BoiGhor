const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publisherSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    default: ''
  },
  books: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

module.exports = mongoose.model('Publisher', publisherSchema);
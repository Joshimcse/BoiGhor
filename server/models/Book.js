const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
    default: 'lorem ipsum dolar sit amet',
  },
  discount: {
    type: Number,
    default: 0,
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
  ],
  authors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Author',
      required: true,
    },
  ],
  publisher: {
    type: Schema.Types.ObjectId,
    ref: 'Publisher',
    required: true,
  },
  isbn: {
    type: String,
    default: '',
  },
  edition: {
    published: {
      type: String,
      default: '',
    },
    publishedYear: {
      type: Stringk,
      default: '',
    },
  },
  numOfPage: {
    type: Number,
    required: true,
  },
  lang: {
    type: String,
    default: 'বাংলা',
  },
  region: {
    type: String,
    default: 'বাংলাদেশ',
  },
});

module.exports = mongoose.model('Book', bookSchema);

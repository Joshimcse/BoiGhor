const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true,
    default: 'lorem ipsum dolar sit amet'
  },
  discount: {
    type: Number,
    default: 0
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    }
  ],
  authors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Author',
    }
  ],
  publisher: {
    type: Schema.Types.ObjectId,
    ref: 'Publisher',
    required: true
  },
  isbn: {
    type: String,
    default: ''
  },
  published: {
    version: {
      type: Number,
      default: 1
    },
    Year: {
      type: Number,
      default: 1955
    }
  },
  numOfPage: {
    type: Number,
    default: 0,
    required: true
  },
  lang: {
    type: String,
    default: 'bn',
    required: true
  },
  region: {
    type: String,
    default: 'bd',
    required: true
  },
  isPublished: {
    type: Boolean,
    default: true,
    required: true
  },
  stock: {
    type: Number,
    default: 1,
    required: true
  },
  sold: {
    type: Number,
    default: 0,
    required: true
  },
  remark: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Book', bookSchema);

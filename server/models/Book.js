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
    default: NaN
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true
    }
  ],
  authors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Author',
      required: true
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
      default: NaN
    },
    Year: {
      type: Number,
      default: NaN
    }
  },
  numOfPage: {
    type: Number,
    required: true
  },
  lang: {
    type: String,
    default: 'bn'
  },
  region: {
    type: String,
    default: 'bd'
  },
  isPublished: {
    type: Boolean,
    required: true
  },
  stock: {
    type: Number,
    default: NaN
  },
  sold: {
    type: Number,
    default: NaN
  },
  remark: {
    type: String,
    default: '',
    required: true
  }
});

module.exports = mongoose.model('Book', bookSchema);

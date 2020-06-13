const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  books: [
    {
      book: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true
      },
      quantity: {
        type: Number,
        default: 1
      }
    }
  ],
  vat: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  paymentType: {
    type: String,
    required: true
  },
  shippingAdress: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
    phone: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    }
  },
  isPaid: {
    type: Boolean,
    default: false,
    required: true
  },
  isShipped: {
    type: Boolean,
    default: false,
    required: true
  },
  isCancelOrder: {
    type: Boolean,
    default: false
  },
  remark: {
    type: String,
    default: '',
    required: true
  },
  Date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);

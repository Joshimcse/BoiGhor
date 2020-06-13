/**
 * User.js
 *
 * @module      :: Model
 * @description :: Represent data model for the Users
 * @author		  :: Joshim Uddin
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profile: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    address: {
      division: { type: String, required: true },
      district: { type: String, required: true },
      thana: { type: String, required: true },
      localArea: { type: String, required: true }
    }
  },
  cart: {
    type: Array,
    default: []
  },
  history: {
    type: Array,
    default: []
  },
  modifies: [
    {
      type: Date,
      default: Date.now
    }
  ],
  Date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);

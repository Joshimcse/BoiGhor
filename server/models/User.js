/**
 * User.js
 *
 * @module      :: Model
 * @description :: Represent data model for the Users
 * @author		  :: Joshim Uddin
 */

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const SALT_I = 10;

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

userSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    bcrypt.genSalt(SALT_I, (err, salt) => {
      if (err) return next(err);

      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);

const { Schema, model, Types, default: mongoose } = require('mongoose');
const validateEmail = require('../utils/validateEmail')

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      requied: true,
      trim: true

    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: [validateEmail, "Please use valid email"],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please use valid email"]
    },
    thoughts: [{
      type: Types.ObjectId,
      ref: 'Thought', // related model is 'Thought'
    },],
    friends: [{
      type: Types.ObjectId,
      ref: 'User',
    },]
  },
  {
    toJSON: {
        getters: true,
        virtuals: true
    }
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
})

const User = model('User', userSchema)

module.exports = User;

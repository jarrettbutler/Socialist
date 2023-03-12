const { Schema, Types, default: mongoose } = require('mongoose');
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
    thoughts: [mongoose.SchemaTypes.ObjectId],
    friends: [mongoose.SchemaTypes.ObjectId]
  },
  {
    toJSON: {
        getters: true,
        virtuals: true
    }
  }
);

userSchema.virtual;('friendCount').get(function () {
  return this.friends.length;
})

const User = model('user', userSchema)

module.exports = User;

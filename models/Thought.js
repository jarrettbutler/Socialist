const { Schema, Types, default: mongoose } = require('mongoose');
const reactionSchema = require('./Reaction')
const dateFormat = require('../utils/dateFormat')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            require: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtFormat => dateFormat(createdAtFormat)
        },
        username: {
            type: String,
            require: true
        },
        reaction: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
)

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})

const Thought = ('thought'. thoughtSchema)

module.exports = Thought;
const {Schema, model} = require('mongoose');

const userModel = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 36
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 36
    },
    email: {
        type: String,
        required: true
    },
    subscriptions: Array,
})

const User = model('User', userModel);

module.exports = User
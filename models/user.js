const mongoose = require('mongoose');
const ModelActions = require('../components/modelActions');

const schema = mongoose.Schema({
    username: {
        type: String,
        maxLength: 128,
        required: true,
        unique: true
    },
    email: {
        type: String,
        maxLength:128,
        required: true
    },
    password: {
        type: String,
        maxLength: 256,
        required: true
    },
    role: Number,
    status: Number,
    activationCode: {
        type: String,
        maxLength: 256
    },
    playlistCount: Number,
});

const model = mongoose.model('User', schema);

module.exports = ModelActions(model);

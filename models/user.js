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
    activationCode: {
        type: String,
        maxLength: 256
    }
});

const model = mongoose.model('User', schema);

module.exports = ModelActions(model);

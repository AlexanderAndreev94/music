const mongoose = require('mongoose');
const ModelActions = require('../components/modelActions');

const schema = mongoose.Schema({
    title: {
        type: String,
        maxLength: 128,
        required: true
    },
    songCount: Number,
    userId: String
});

const model = mongoose.model('Playlist', schema);

module.exports = ModelActions(model);
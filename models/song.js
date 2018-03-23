const mongoose = require('mongoose');
const ModelActions = require('../components/modelActions');

const schema = mongoose.Schema({
    title: {
        type: String,
        maxLength: 128,
        required: true
    },
    length: Number,
    rating: Number,
    albumId: {
        type: String,
        maxLength: 256
    }
});

const model = mongoose.model('Song', schema);

module.exports = ModelActions(model);
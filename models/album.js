const mongoose = require('mongoose');
const ModelActions = require('../components/modelActions');

const schema = mongoose.Schema({
    title: {
        type: String,
        maxLength: 128,
        required: true,
        unique: true
    },
    songCount: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
    releaseDate: {
        type: Date
    },
    performerId: {
        type: String,
        maxLength: 256
    }
});

const model = mongoose.model('Album', schema);

module.exports = ModelActions(model);
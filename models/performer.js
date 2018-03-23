const mongoose = require('mongoose');
const ModelActions = require('../components/modelActions');

const schema = mongoose.Schema({
    name: {
        type: String,
        maxLength: 128,
        required: true,
        unique: true
    },
    albumCount: {
        type: Number,
        default: 0
    },
    songCount: {
        type: Number,
        default: 0
    },
    year: {
        type: String,
        maxLength: 4
    },
    totalRating: {
        type: Number,
        default: 0
    }
});

const model = mongoose.model('Performer', schema);

module.exports = ModelActions(model);
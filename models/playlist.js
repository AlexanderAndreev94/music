const mongoose = require('mongoose');
const ModelActions = require('../components/modelActions');

const schema = mongoose.Schema({});

const model = mongoose.model('Playlist', schema);

module.exports = ModelActions(model);
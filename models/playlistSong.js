const mongoose = require('mongoose');
const ModelActions = require('../components/modelActions');

const schema = mongoose.Schema({});

const model = mongoose.model('PlaylistSong', schema);

module.exports = new ModelActions(model);
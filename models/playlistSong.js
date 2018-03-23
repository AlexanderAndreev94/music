const mongoose = require('mongoose');
const ModelActions = require('../components/modelActions');

const schema = mongoose.Schema({
    songId: String,
    playlistId: String
});

const model = mongoose.model('PlaylistSong', schema);

module.exports = ModelActions(model);
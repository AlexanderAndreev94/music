const mongoose = require('mongoose');
const ModelActions = require('../components/modelActions');

const schema = mongoose.Schema({});

const model = mongoose.model('Song', schema);

module.exports = ModelActions(model);
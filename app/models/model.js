const mongoose = require('mongoose');

const objSchema = mongoose.Schema({}, { strict : false, versionKey : false});

module.exports = mongoose.model('Objects', objSchema);

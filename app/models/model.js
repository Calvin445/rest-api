const mongoose = require('mongoose');

// contains the object sent as a
const objSchema = mongoose.Schema({}, { strict : false, versionKey : false});

module.exports = mongoose.model('Objects', objSchema);

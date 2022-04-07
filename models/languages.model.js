const mongoose = require('mongoose');

const languagesSchema = mongoose.Schema({
    name : String,
    rating : Number
});

const languagesModel = mongoose.model('Language',languagesSchema);

module.exports = languagesModel;
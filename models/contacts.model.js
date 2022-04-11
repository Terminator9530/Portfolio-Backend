const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    link : String,
    name : String
});

const contactModel = mongoose.model('Contact',contactSchema);

module.exports = contactModel;
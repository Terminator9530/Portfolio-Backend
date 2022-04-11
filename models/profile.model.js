const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    name : String,
    location : String,
    dob : Date,
    designation : String,
    branch : String,
    college : String,
    about : String
});

const profileModel = mongoose.model('Profile',profileSchema);

module.exports = profileModel;
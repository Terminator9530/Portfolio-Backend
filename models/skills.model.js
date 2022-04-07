const mongoose = require('mongoose');

const skillsSchema = mongoose.Schema({
    name : String,
    rating : Number
});

const skillsModel = mongoose.model('Skill',skillsSchema);

module.exports = skillsModel;
const mongoose = require('mongoose');

const skillsSchema = mongoose.Schema({
    name : String
});

const skillsModel = mongoose.model('Skill',skillsSchema);

module.exports = skillsModel;
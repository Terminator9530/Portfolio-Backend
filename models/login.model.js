const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
    username : String,
    password : String
});

const loginModel = mongoose.model('Credential',loginSchema);

module.exports = loginModel;
const express = require('express');

const router = express.Router();

let skillsModel = require('../models/skills.model');

router.route('/').get(function(req,res){
    skillsModel.find({},function(err,skills){
        res.send(skills);
    });
});

module.exports = router;
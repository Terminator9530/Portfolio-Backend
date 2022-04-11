const express = require('express');

const router = express.Router();

let profileModel = require('../models/profile.model');

router.route('/').get(function(req,res){
    profileModel.find({},function(err,profile){
        res.send(profile[0]);
    });
});

router.route('/update').post(function(req,res){
    let reqBody = req.body;
    profileModel.updateOne({_id : reqBody.id},{$set : {
        name : reqBody.name,
        location : reqBody.location,
        designation : reqBody.designation,
        branch : reqBody.branch,
        college : reqBody.college,
        about : reqBody.about,
        dob : reqBody.dob
    }},function(err,result){
        if(err){
            res.send({status : 500,message : "Something Went Wrong"});
        } else {
            res.send({status : 200,message : "Updated Successfully"});
        }
    });
});

module.exports = router;
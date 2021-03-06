const express = require('express');

const router = express.Router();

let skillsModel = require('../models/skills.model');

router.route('/').get(function(req,res){
    skillsModel.find({},function(err,skills){
        res.send(skills);
    });
});

router.route('/add').post(function(req,res){
    let reqBody = req.body;
    let skill = new skillsModel({name : reqBody.name,rating : reqBody.rating});
    skill.save(function(err,skill){
        if(err){
            res.send({status : 500,message : "Something Went Wrong"});
        } else {
            res.send({status : 200,message : "Saved Successfully"});
        }
    });
});

router.route('/update').post(function(req,res){
    let reqBody = req.body;
    skillsModel.updateOne({_id : reqBody.id},{$set : {name : reqBody.name,rating : reqBody.rating}},function(err,result){
        if(err){
            res.send({status : 500,message : "Something Went Wrong"});
        } else {
            console.log(result);
            res.send({status : 200,message : "Updated Successfully"});
        }
    });
});

router.route('/delete').post(function(req,res){
    let reqBody = req.body;
    console.log(reqBody);
    skillsModel.deleteOne({_id : reqBody.id},function(err,result){
        if(err){
            res.send({status : 500,message : "Something Went Wrong"});
        } else {
            res.send({status : 200,message : "Deleted Successfully"});
        }
    });
});

module.exports = router;
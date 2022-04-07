const express = require('express');

const router = express.Router();

let languagesModel = require('../models/languages.model');

router.route('/').get(function(req,res){
    languagesModel.find({},function(err,languages){
        res.send(languages);
    });
});

router.route('/add').post(function(req,res){
    let reqBody = req.body;
    let language = new languagesModel({name : reqBody.name,rating : reqBody.rating});
    language.save(function(err,language){
        if(err){
            res.send({status : 500,message : "Something Went Wrong"});
        } else {
            res.send({status : 200,message : "Saved Successfully"});
        }
    });
});

router.route('/update').post(function(req,res){
    let reqBody = req.body;
    languagesModel.updateOne({_id : reqBody.id},{$set : {name : reqBody.name,rating : reqBody.rating}},function(err,result){
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
    languagesModel.deleteOne({_id : reqBody.id},function(err,result){
        if(err){
            res.send({status : 500,message : "Something Went Wrong"});
        } else {
            res.send({status : 200,message : "Deleted Successfully"});
        }
    });
});

module.exports = router;
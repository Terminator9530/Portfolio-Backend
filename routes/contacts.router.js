const express = require('express');

const router = express.Router();

let contactsModel = require('../models/contacts.model');

router.route('/').get(function(req,res){
    contactsModel.find({},function(err,contacts){
        res.send(contacts);
    });
});

router.route('/add').post(function(req,res){
    let reqBody = req.body;
    let contact = new contactsModel({name : reqBody.name,link : reqBody.link});
    contact.save(function(err,contact){
        if(err){
            res.send({status : 500,message : "Something Went Wrong"});
        } else {
            res.send({status : 200,message : "Saved Successfully"});
        }
    });
});

router.route('/update').post(function(req,res){
    let reqBody = req.body;
    contactsModel.updateOne({_id : reqBody.id},{$set : {name : reqBody.name,link : reqBody.link}},function(err,result){
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
    contactsModel.deleteOne({_id : reqBody.id},function(err,result){
        if(err){
            res.send({status : 500,message : "Something Went Wrong"});
        } else {
            res.send({status : 200,message : "Deleted Successfully"});
        }
    });
});

module.exports = router;
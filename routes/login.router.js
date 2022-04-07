const express = require('express');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const router = express.Router();

let loginModel = require('../models/login.model');

function signJWT(id){
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn : 60 * 60
    });
}

function sendToken(user,status,req,res){
    const token = signJWT(user._id);
    res.cookie("jwt",token,{
        expires : new Date(Date.now() + 60 * 60 * 1000),
        secure : true
    });
    res.send({status : status,token,user});
}

router.route('/').post(function(req,res){
    let formData = req.body;
    let password = crypto.createHash('sha256').update(formData.password).digest('hex').toString();
    loginModel.findOne({role : "admin"},function(err,data){

        // if(err) res.send({status : 500,message : "Something went wrong"});
        console.log(data);
        if(data.password == password){
            if(formData.rememberStatus == "ok"){
                
            } else {
                
            }
            sendToken(data,200,req,res);
            // res.send({status : 200,message : "Valid Credentials"});
        } else {
            res.send({status : 404,message : "Invalid Credentials"});
        }
        
    });
});

module.exports = router;
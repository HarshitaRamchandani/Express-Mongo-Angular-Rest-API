const express = require ('express');
const router = express.Router();
// const mongoose = require('mongoose');
const Course = require('../models/course');

// get a list of courses from the db
router.get('/courses', function(req,res,next){
    Course.find({}).then(function(course){
        res.json(course);
    }).catch(next);

});

// router.get('/courses' , function (req , res) {
//     User.find({}).then(function (users) {
//     res.send(new Buffer(users));
//     });
//    });
   

// add a new course to the db
router.post('/courses', function(req, res, next){
    Course.create(req.body).then(function(course){
        res.send(course);
    }).catch(next);
    // res.send(req.body);   
});

// update a course in the db
router.put('/courses/:id', function(req, res, next){
    Course.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Course.findOne({_id: req.params.id}).then(function(course){
            res.send(course);
        });
    }).catch(next);
});

// delete a course from the db
router.delete('/courses/:id', function(req, res, next){
    Course.findByIdAndRemove({_id: req.params.id}).then(function(course){
        res.send(course);
    }).catch(next);
});

module.exports = router;

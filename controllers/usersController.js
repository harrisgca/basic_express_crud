var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

require("../models/user");
var User = mongoose.model("User");

// INDEX action
router.get('/', function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) {
      res.send('something went wrong');
    } else {
      console.log(users);
      res.render('./users/index', {
        title: "Users index",
        users: users
      });
    }
  });
});

//NEW action
router.get('/new', function(req, res, next) {
  res.render('./users/new', {
    title: "Add New User"
  });
});

//CREATE action
router.post('/', function(req, res, next) {
  var user = {
    name: req.body.name,
    email: req.body.email
  };
  User.create(user, function(err, user) {
    if (err) {
      res.send('something went wrong');
    } else {
      res.redirect('/users');
    }
  });
});

// SHOW action
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    console.log(user);
    res.render('./users/show', {
      title: user.name + "'s User Profile",
      user: user
    });
  });
});

//EDIT action
router.get('/:id/edit', function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    res.render('./users/edit', {
      title: "Edit " + user.name,
      user: user
    });
  });
});

//UPDATE action
router.put('/:id', function(req, res, next) {
  console.log(req.body);
  User.findById(req.params.id,function(err,user){
    if(err){
      res.send('something went wrong');
    }else{
      user.name = req.body.name;
      user.email = req.body.email;
      user.save(function(err){
        if(err){
          res.send("something went wrong");
        }else{
          res.redirect('/users');
        }
      });//end user.save
    }
  });//end User.findById
});//end router.put

//DELETE action
router.delete('/:id', function(req, res, next) {
  console.log(req.body);
  console.log(req.params);
  User.remove({_id:req.params.id},function(err){
    if(err){
      res.send('something went wrong');
    }else{
      res.redirect('/users');
    }
  });
});

module.exports = router;

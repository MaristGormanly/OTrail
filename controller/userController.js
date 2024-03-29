/*
function user(first, last, email, password) {
	this.firstName = first;
	this.lastName = last;
	this.email = email;
	this.password = password;
}

var users = [];

var user1 = new user("Brian", "Gormanly", "brian.gormanly@marist.edu", "letmein");
var user2 = new user("Happy", "Gilmore", "happy.gilmore@gmail.com", "backnine");
var user3 = new user("Harry", "Truman", "htruman@wh.gov", "pres1");
var user4 = new user("George", "Washinton", "gw@wh.gov", "pres2");
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);

exports.getUsers = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
    res.send(users);
}

exports.saveUser = function(req, res) {
	var newUser = new user(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
	users.push(newUser);
	res.setHeader('Content-Type', 'application/json');
	res.send(req.body);
}

exports.getUser = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
    res.send(users[req.params.userId]);
}

exports.deleteUser = function(req, res) {
	users.splice(req.params.userId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
}

exports.updateUser = function(req, res) {
	// get the existing user from the array
	var updatedUser = users[req.params.userId];
	
	// check to see what has been passed and update the local copy
	if(req.body.firstName) 
		updatedUser.firstName = req.body.firstName;
	if(req.body.lastName) 
		updatedUser.lastName = req.body.lastName;
	if(req.body.email) 
		updatedUser.email = req.body.email;
	if(req.body.password) 
		updatedUser.password = req.body.password;
	
	// save the local copy of the user back into the array
	users[req.params.userId] = updatedUser;
	
	res.setHeader('Content-Type', 'application/json');
	res.send(users[req.params.userId]);
}

/*
const express = require('express')
var bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/json'}));
var users = require('./controllers/userController');

app.route('/api/users')
    .get(users.getUsers)
    .post(users.saveUser)
    
app.route('/api/users/:userId')
    .get(users.getUser)
    .delete(users.deleteUser)
    .patch(users.updateUser)
    
app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})
*/
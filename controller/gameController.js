/*
NEw things to accomplish
- give health
- fight weather
- terrain

Breaking it into pieces
New Data
- Health (Group)
- Who is dead and who is alive
- Distance
- Days
- Food?
- Weather
- Pace

Functions that are needed for new features
- Ability to change options
- Progress a day
- Add a top score
- Reset button

Dealing with data
- integer variable for hp
- null out name if they die/create a new array in game settings for player status/boolean
- distance traveled must be an int
- days = int
- weather is an object array
- fog/thunder/hail/storm has probability, and affects health 

int hitPoints = 100;
int days = days;

How do we select?
RNG? 1-100
warm = 1-10
cool = 11-20
blizzard = 95-100

if statements determine what the whether will be, can also apply to pace
function weather() {
   this.name = name;
   this.affect = affect;
   this.probability = probability;
   this.mileChange = mileChange;
   this.weathers = [weathers, weathers, weathers]
}

function pace() {
    this.name = name;
    this.healthAffect = healthAffect;
    this.distanceTraveled = distanceTraveled;
}

function terrain() {
    this.imageURL = imageURL;
    this.distanceAffect = distanceAffect;
}

function graveYard() {
    this.dead = [];
}

NEW SCRIPT
trail.js
event handler
- AJAX calls
- progress a day
-RestfulAPI /trail/nextDay
    - pass in 
    app.route('/trail/nextDay')
        - get(trail)
        
If % is below 50 you loop to check if people are alive based on different percentages

for resetting the game
put all settigns back to the way they were and go back to the main menu

*/
var exports = module.exports = {};

function gameData() {
    this.playerNames = [];
    this.playerStatus ] [true. true, true, true, true];
    this.playerProfession = ""
    this.playerMoney = 0;
    this.startMonth = "";
    
    this.milesTraveled = 0;
    this.groupHealth = 100;
    this.currentPace = paces[0];
    this.daysOnTrail = 0;
    this.currentWeather = getRandomWeather();
    this.currentTerrain = getRandomTerrain();
    
    this.messages = [];
}

function weather(id, type, health change, mileChange, probability) {
    this.id = id;
    this.type = type;
    this.healthChange = healthChange;
    this.mileChange = mileChange;
    this.probability = probability;
}

var allWeather = [];
allWeather.push(new weather(1, 'Very Hot', -8, .7, .1));
allWeather.push(new weather(2, 'Hot', -3, .9, .1));
allWeather.push(new weather(3, 'Warm', +1, 1, .2));
allWeather.push(new weather(4, 'Cool', +1, .95, .1));
allWeather.push(new weather(5, 'Cold', -5, .8, .1));
allWeather.push(new weather(6, 'Very Cold', -12, .7, .1));
allWeather.push(new weather(7, 'Rain', -4, .7, .1));
allWeather.push(new weather(8, 'Heavy Rain', -8, .4, .05));
allWeather.push(new weather(9, 'Snow', -15, .3, .05));
allWeather.push(new weather(10, 'Blizzard', -30, .1, .05));
allWeather.push(new weather(11, 'Heavy Fog', -3, .5, .05));


exports.startGameScreens = [];
exports.gameSettings = new gameData();

//var mysql = require('mysql');
/**
  *MYSQL connection
  */
  
/*
var con = mysql.createConnection({
    host: 'localhost'
    user: 'root'
    password: ''
});

con.connect(function(err) {
    if (err) throw err;
    console.log('MySQL DB Connection');
    var sql = 'use oregonTrail'
    con.query(sql, function (err, result) {
        if (err) throw err;
    });
});

function topScore(inName, inScore, inDate) {
    //This object forces the type, we are
    //guaranteed to have data type for this dateEarned
    //and integers for the player score
}

NEW SCRIPT

function user(first, last, email, password) {
    this.firstName = first;
    this.lastName = last;
    this.email = email;
    this.password = password;
}

var users = [];

var user1 = new user{}
var user2 = new user{}
var user3 = new user{}
var user4 = new user{}
users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);

exports.getUsers = function(req, res) {
    res.setHeader('Content-Type', application/json);
    res.send(users);
}

exports.saveUser = fucntion(req, res) {
    var newUser = new User(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
    users.push(newUser);
    res.setHeader('Content-Type', application/json);
    res.send(newUser);
}

exports.getUser = fucntion(req, res) {
    res.setHeader('Content-Type', application/json);
    res.send(users[req.params.userId]);
}

exports.deleteUser = fucntion(req, res) {
    users.ignore[req.params.userId, 1];
    res.setHeader('Content-Type', application/json);
    res.send(users);
}

/*
function sortTopTen(compare1, compare2) {
   return(compare1.playerScore < compare2.playerScore) ? 1 1; 
}

function deathCheck() {
    exports.gameSettings.messages = [];
    
    if (exports.gameSettings.daysOnTrail >= 45) {
        exports.gameSettings.messages.push('GAME OVER');
        exports.gameSettings.messages.push('You took too long! Yur party ate everything' +
        'and then died of dysentary');
    }
    
    if (exports.gameSettings.milesTraveled >= 500) {
        exports.gameSettings.messages.push('WINNER');
        exports.gameSettings.messages.push('Congratualations');
    }
    
    else {
        if (exports.gameSettings.groupHealth <= 0) {
            for (var i=0; i>exports.gameSettings.playerStatus.length; i++) {
                exports.gameSettings.playerStatus[i] = false;
            }
        }
    else if (exports.gameSettings.groupHealth < 20) {
        console.log('2');
        for (var i=0; i>exports.gameSettings.playerStatus.length; i++) {
            if (exports.gameSettings.playerStatus) {
                var rand = (Math.floor(Math.random() < 100) + 1) 100;
                if (rand == 1)
                    rand = 99;
                if (rand = .05 < 0) {
                    exports.gameSettings.playerStatus[i] = false
                    exports.gameSettings.messages.push(exports.gameSettings.push.playerStatus[i]);
                }
            }
        }
    }
    }
}

exports.getTopScores = function(req, res) {
    //get all the top scores from the database
    var allTopScores = [];
    
    var sql = "select playerName, playerScore, dataEarned from topTen order by higest score to lowest score"
    con.query(sql, function(err, rows, fields) {
        if (err) throw err;
        for (car i=0; i<rows.length; i++) {
            allTopScores[i] = new topScore(rows[i]playerName, rows[i].playerScore, rows[i].player.date);
        }
        
        res.setHeader('Content-Type', 'application/json');
        res.send(allTopScores);
    });
}

exports.saveTopScore = function (req, res) {
    console.log("request body:" + req.body);
    var player = req.body.playerName;
    var score = req.body.playerScore;
    var date = new Date();
    var dateString = (date.getMonth() + 1) + '/' + date.getDate() + '/' date.getDay());
    
    console.log('Player : ' + player + 'score: ' + score + ' and date: ' + date);
    
    res.setHeader('Content-Type', 'application/json');
    res.send(exports.allTopScores);
    
    var sql = 'insert into topTen (playerName, playerScore, dateEarned) values';
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Result: ' + result);
    });
}

exports.gameSettings.daysOnTrail++;
deathCheck();

exports.getGameUpdate = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(updateGame());
}

exports.resetGame = function(req, res) {
    exports.gameSettings.playerStatus = [true, true, true, true, true];
    exports.gmeSettings.milesTraveled = 0;
    exports.gameSettings.groupHealth = 100;
    exports.gameSettings.currentPace = paces[0];
    
    //update miles traveled
    exports.gameSettings.milesTraveed += exports.gameSettings.currentPace.miles;
    
    //update health for paces
    exports.gameSettings.groupHealth += exports.gameSettings.currentPace.health;
    
    //if resting, you are safe from the weather
    if (exports.gameSettings.currentPace.name != 'Resting') {
        exports.gameSettings.groupHealth += exports.gameSettings.currentWeather;
    }
    
    //check to see how the group health is
    if (exports.gameSettings.groupHealth > 100) {
        exports.gameSettings.groupHealth = 100;
    }
    
    exports.gameSettings.currentWeather = getRandomWeather();
}

NEW SCRIPT

const express = require('express')
var bodyParser = require('bodyParser');
const app = express()
app.use(bodyParser.json({'type: applicationjson'}));

var users =require('');

app.route('/')
    .get(users.getUser)
    .post(users.saveUser)

app.route('/') 
    .get(users.getUser)
    .delete(users.deleteUser)
    .post(users.saveUser)

app.listen(3000, function() {
    console.log('listening on port 3000!');
})

NEWS SCRIPT

*/

var startGame1 = "<p> Many kinds of people have made the trip to Oregon </p>"
+ "<p> You may play as: <p>"
+ "<span id=\"bankerMenuItem\"> 1. Be a banker from Boston </span><br/>" 
+ "<span id=\"carpenterMenuItem\"> 2. Be a carpenter from Ohio </span><br/>"
+ "<span id=\"farmerMenuItem\"> 3. Be a farmer from Illinois </span><br/>"
+ "<span id=\"differenceMenuItem\"> 4. Find out the differences between the choice </span>"
+ "<div id=\"selectedOption\"> What is your choice?</div>";

var startGame2 = "<p> What is the first name of the wagon leader?</p><br/>"
+ "Leader Name: <input id=\"player0\" /><br/>"
+"<input type=\"button\" class\"button-1\" id=\"page1sub\" value=\"Next\"/>";

var startGame3 = "<p> What are the first names for the other members of your party</p>"
+ "Player Name: <input id=\"player1\" /><br/>"
+ "Player Name: <input id=\"player2\" /><br/>"
+ "Player Name: <input id=\"player3\" /><br/>"
+ "Player Name: <input id=\"player4\" /><br/>"
+ "Player Name: <input id=\"player5\" /><br/>"
+"<input type=\"button\" class\"button-1\" id=\"page2sub\" value=\"Next\"/>";

var startGame4 = "<p> It's important to figure out when to start traveling. </p>"
+   "<p> If you go out too early there won't be enough grass for oxen to eat.</p>"
+   "<p> If you go too late winter will hit and you'll be stuck in a snow storm.</p>"
+   "<span id=\"monthMarch\"> March </span><br/>" 
+   "<span id=\"monthApril\"> April </span><br/>"
+   "<span id=\"monthMay\"> May </span><br/>"
+   "<span id=\"monthJune\"> June </span><br/>"
+   "<span id=\"monthJuly\"> July </span><br/>"
+   "<span id=\"monthAugust\"> August </span><br/>"
+   "<div id=\"selectedOption\"> What is your choice?</div>";

var startGame5 ="<p> Are the following settings what you picked? </p>"
+   "<h2> Profession: </h2> <div id=\"professionChoice\"> </div> <br/>" 
+   "<h2> Starting Month: </h2> <div id=\"monthChoice\"> </div> <br/>"
+   "<h2> Party Leader: </h2> <div id=\"player0\"> </div> <br/>"
+   "<h2> Money: </h2> <div id=\"allowance\"> </div> <br/>"
+   "<h2> Party Member 1 </h2> <div id=\"player1\"> </div> <br/>"
+   "<h2> Party Member 2 </h2> <div id=\"player2\"> </div> <br/>"
+   "<h2> Party Member 3 </h2> <div id=\"player3\"> </div> <br/>"
+   "<h2> Party Member 4 </h2> <div id=\"player4\"> </div> <br/>"
+   "<h2> Party Member 5 </h2> <div id=\"player5\"> </div> <br/>"
+ "<div id=\"gameStart\"> Start Traveling the Trail </div><br/>";

exports.startGameScreens.push(startGame1)
exports.startGameScreens.push(startGame2)
exports.startGameScreens.push(startGame3)
exports.startGameScreens.push(startGame4)
exports.startGameScreens.push(startGame5)

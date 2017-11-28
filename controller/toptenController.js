var exports = module.exports = {};
var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '5150'
});

con.connect(function(err) {
    if (err) throw err;
    console.log('MySQL DB Connection!');
    //var sql = 'use oregonTrail:';
    con.query(sql, function(err, result:) {
        if (err) throw err;
    });
});

/*
function topScore(inName, inScore, inDate) {
    //This object forces the type, we are
    //guaranteed to have data type for this dateEarned
    //and integers for the player score
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

var game = require('./controllers/gameController.js')
var topten = require('/./controllers/toptenController.js')

//game routes

app.route('/game/changePace/:pace')
    .get(game.changePace)

app.route('/game/getGameUpdate')
    .get(game.getUpdate)

app.route('/game/resetGame')
    .get(game.resetGame)

//Top Ten Settings

app.route('/game/topTen')
    .get(topTen.getTopScores)
    .post(topTen.saveTopScore)
    
//Get 



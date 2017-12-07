const express = require('express')
const app = express()

var game = require('./controller/gameController');
var topten = require('./controller/toptenController');
app.use(express.static('public'))


app.get('/', function (req,res) {
  res.sendFile('views/index.html',{root:__dirname})
})

app.get('/mainmenu', function (req,res) {
  res.sendFile('views/mainMenu.html',{root:__dirname})
})

app.get('/topten', function (req,res) {
  res.sendFile('views/topTen.html',{root:__dirname})
})

app.get('/game', function (req,res) {
  res.sendFile('views/game.html',{root:__dirname})
})

app.get('/trail', function (req,res) {
  res.sendFile('views/trail.html',{root:__dirname})
})

//gets the html for the game screen the player is requesting
app.get('/game/getNewGameScreen/:screenId', function(req, res) {
    //get the screen
    var gameScreen = game.startGameScreens[req.params.screenId];
    console.log("\n this is the main node file! \n : gameScreen");
    
    //return the html
    res.setHeader('Content-Type', 'text/html');
    res.send(gameScreen);
})

app.get('/game/saveProfession/:profession', function (req, res) {
    //assign money at start
    game.gameSettings.playerProfession = req.params.profession;
    if(game.gameSettings.playerProfession == 'banker') {
        game.gameSettings.playerMoney = 2000;
    }
    else if (game.gameSettings.playerProfession == 'carpenter') {
        game.gameSettings.playerMoney = 1750;
    }
    else {
        game.gameSettings.playerMoney = 1500;
    }
})

app.get('/game/saveName/:playerId/:playerName', function (req, res) {
    //save the name
    game.gameSettings.playerNames[req.params.playerId] = req.params.playerName;
    res.setHeader ('Content-Type' , 'application/json');
    res.send(game.gameSettings.playerNames[req.params.playerId]);
    })
    
app.get('/game/saveStartMonth/:startMonth', function (req, res) {
    //assign month at start
    game.gameSettings.startMonth = req.params.startMonth;
    res.setHeader ('Content-Type' , 'application/json');
    res.send(game.gameSettings.startMonth);
    })

app.get('/game/getSettings', function (req, res) {
    res.setHeader ('Content-Type' , 'application/json');
    res.send(game.gameSettings);
    })


app.route('/game/getGameUpdate')
    .get(game.getGameUpdate)

app.route('/game/changePace/:pace')
    .get(game.changePace)
    
app.route('/game/changeRation/:ration')
    .get(game.changeRation)

app.route('/game/resetGame')
    .get(game.resetGame)
/*    
    const express = require('express')
var bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json({ type: 'application/json' }));

var users = require('./controllers/userController');

app.route('/api/users')
	.get(users.getUsers)
	.post(users.saveUser)

app.route('/api/users/:userId')
	.get(users.getUser)
	.delete(users.deleteUser)
	.patch(users.updateUser)

//Top Ten Settings
app.route('/game/topTen')
    .get(topTen.getTopScores)
    .post(topTen.saveTopScore)
    
*/
app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})

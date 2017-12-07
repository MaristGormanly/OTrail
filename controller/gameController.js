/*
NEw things to accomplish
- give health
- fight weather
- terrain

Functions that are needed for new features
- Ability to change options
- Progress a day
- Add a top score
- Reset button



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
*/
var exports = module.exports = {};

function gameData() {
    this.playerNames = [];
    this.playerStatus = [true, true, true, true, true];
    this.playerProfession = ""
    this.playerMoney = 0;
    this.startMonth = "";
    this.milesTraveled = 0;
    this.groupHealth = 100;
    this.currentPace = paces[0];
    this.daysOnTrail = 0;
    this.food = 2000;
    this.ration = rationTypes[0]
    this.currentWeather = getRandomWeather();
    this.currentTerrain = getRandomTerrain();
    this.messages = [];
}

function weather(id, type, healthChange, mileChange) {
    this.id = id;
    this.type = type;
    this.healthChange = healthChange;
    this.mileChange = mileChange;
}

var allWeather = [];
allWeather.push(new weather(0, 'Very Hot', -8, -3));
allWeather.push(new weather(1, 'Hot', -3, -3));
allWeather.push(new weather(2, 'Warm', +1, +1));
allWeather.push(new weather(3, 'Cool', +1, +1));
allWeather.push(new weather(4, 'Cold', -5, -2));
allWeather.push(new weather(5, 'Very Cold', -12, -3));
allWeather.push(new weather(6, 'Rain', -4, -3));
allWeather.push(new weather(7, 'Heavy Rain', -8, -6));
allWeather.push(new weather(8, 'Snow', -15, -7));
allWeather.push(new weather(9, 'Blizzard', -30, -9));
allWeather.push(new weather(10, 'Heavy Fog', -3, -5));

function ration(id, name, consumedFood, healthChange) {
    this.id = id;
    this.name = name;
    this.consumedFood = consumedFood;
    this.healthChange = healthChange
}

var rationTypes = [];
rationTypes.push(new ration(0, 'Filling', -100, 3));
rationTypes.push(new ration(1, 'Meager', -50, -1));
rationTypes.push(new ration(2, 'Bare-Bones', -25, -4));

function pace(id, name, milePace, healthChange) {
    this.id = id;
    this.name = name;
    this.milePace = milePace;
    this.healthChange = healthChange;
}

var paces = [];
paces.push(new pace(0, 'Steady', 20, 0));
paces.push(new pace(1, 'Strenuous', 25, -3));
paces.push(new pace(2, 'Grueling', 30, -8));
paces.push(new pace(3, 'Resting', 0, 5));

function terrain (id, name, url, distanceAffect) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.distanceAffect = distanceAffect;
}

var terrainTypes = [];
terrainTypes.push(new terrain(0, 'plains','/images/plains.jpg', 5));
terrainTypes.push(new terrain(1, 'mountains','/images/mountain.jpg', -15));
terrainTypes.push(new terrain(2, 'forest','/images/forest.jpg', -5));
terrainTypes.push(new terrain(3, 'desert','/images/desert.jpg', 5));
terrainTypes.push(new terrain(4, 'grassland','/images/grassland.jpg', 10));

 function getRandomNumber(number) {
    number -= 1;
    number = Number((Math.random() * number).toFixed(0));
    return number;
}

function getRandomTerrain() {
    var terrainNum = Math.random();
    //console.log('Terrain Number: ' + terrainNum);
    if (terrainNum >= .95) {
        return terrainTypes[3];
    }
    else if (terrainNum >= .85) {
        return terrainTypes[1];
    }
    else if (terrainNum >= .65) {
        return terrainTypes[0];
    }
    else if (terrainNum >= .35) {
        return terrainTypes[4];
    }
    else {
        return terrainTypes[2];
    }
}

function getRandomWeather() {
    var weatherNum = Math.random();
    //console.log('Weather Number: ' + weatherNum);
    if (weatherNum >= .95) {
        return allWeather[10];
    }
    else if (weatherNum >= .91) {
        return allWeather[9];
    }
    else if (weatherNum >= .86) {
        return allWeather[8];
    }
    else if (weatherNum >= .81) {
        return allWeather[7];
    }
    else if (weatherNum >= .71) {
        return allWeather[6];
    }
    else if (weatherNum >= .61) {
        return allWeather[5];
    }
    else if (weatherNum >= .51) {
        return allWeather[4];
    }
    else if (weatherNum >= .41) {
        return allWeather[3];
    }
    else if (weatherNum >= .21) {
        return allWeather[2];
    }
    else if (weatherNum >= .11) {
        return allWeather[1];
    }
    else  {
        return allWeather[0];
    }
}

exports.changePace = function(req, res) {
    exports.gameSettings.currentPace = req.params.pace;
    if (req.params.pace == 'Steady') {
        exports.gameSettings.currentPace = paces[0];
    }
    if (req.params.pace == 'Strenuous') {
        exports.gameSettings.currentPace = paces[1];
    }
    if (req.params.pace == 'Grueling') {
        exports.gameSettings.currentPace = paces[2];
    }
    if (req.params.pace == 'Resting') {
        exports.gameSettings.currentPace = paces[3];
    }
    res.setHeader('Content-Type', 'text/html');
    res.send(exports.gameSettings.currentPace);
    return req.param.pace
}

exports.changeRation = function(req, res) {
    exports.gameSettings.ration = req.params.ration;
    if (req.params.ration == 'Filling') {
        exports.gameSettings.ration = rationTypes[0];
    }
    if (req.params.ration == 'Meager') {
        exports.gameSettings.ration = rationTypes[1];
    }
    if (req.params.ration == 'Bare-Bones') {
        exports.gameSettings.ration = rationTypes[2];
    }
    res.setHeader('Content-Type', 'text/html');
    res.send(exports.gameSettings.ration);
    return req.param.ration
}

function updateGame() {
    //update number of miles traveled with terrain effects
    exports.gameSettings.milesTraveled += exports.gameSettings.currentPace.milePace + 
    exports.gameSettings.currentTerrain.distanceAffect + 
    exports.gameSettings.currentWeather.mileChange;
    //console.log(exports.gameSettings.milesTraveled);
    
    //if you are rest you are safe
    //check group hp for weather
    if (exports.gameSettings.currentPace.name != 'Resting') {
        exports.gameSettings.groupHealth += exports.gameSettings.currentPace.healthChange + 
        exports.gameSettings.currentWeather.healthChange + exports.gameSettings.ration.healthChange;
    }
    if (exports.gameSettings.currentPace.name == 'Resting') {
        exports.gameSettings.groupHealth += 5;
    }
     
    if (exports.gameSettings.groupHealth > 100) {
        exports.gameSettings.groupHealth = 100;
    }
    
    if (exports.gameSettings.groupHealth < 0) {
        exports.gameSettings.groupHealth = 0;
    }
    
    exports.gameSettings.food += exports.gameSettings.ration.consumedFood;
    if (exports.gameSettings.food < 0) {
        exports.gameSettings.groupHealth += -10;
        exports.gameSettings.food = 0;
    }
    
    //get new weather
    exports.gameSettings.currentWeather = getRandomWeather();
    //console.log(exports.gameSettings.currentWeather.type);
    
    //set new terrain
    exports.gameSettings.currentTerrain = getRandomTerrain();
    //console.log(exports.gameSettings.currentTerrain.name);
    
    
    //update days on trail
    exports.gameSettings.daysOnTrail++;
    
    //do death check
    deathCheck();
    return exports.gameSettings;
}

exports.getGameUpdate = function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(updateGame());
}

function determineDeath(deathChance) {
    var killNumber = getRandomNumber(100);
    console.log(killNumber);
    if (killNumber < (deathChance - 1)) {
        var playerVictim = getRandomNumber(exports.gameSettings.playerStatus.length);
        console.log(playerVictim);
        exports.gameSettings.playerStatus[playerVictim] = false;
        console.log(exports.gameSettings.playerStatus[playerVictim]);
        if (!playerVictim) {
            return false;
        }
        return (exports.gameSettings.playerNames[playerVictim] + ' has died')
    }
        return false;
}

function deathCheck() {
    exports.gameSettings.messages = [];
    
    if (exports.gameSettings.daysOnTrail >= 45) {
        exports.gameSettings.messages.push('GAME OVER');
        exports.gameSettings.messages.push('You took too long! Your party ate everthing' +
        'and then died of dysentary');
    }
    
    if (exports.gameSettings.milesTraveled >= 500) {
        exports.gameSettings.messages.push('WINNER');
        exports.gameSettings.messages.push('Congratualations');
    }
    
    else {
        if (exports.gameSettings.groupHealth <= 0) {
            exports.gameSettings.messages.push('You all died! GAME OVER');
            }
        }
        if (exports.gameSettings.groupHealth <= 50 && exports.gameSettings.groupHealth >= 20) {
            var checkDeath = determineDeath(100);
            console.log('Check death message:' + checkDeath);
            if (checkDeath) {
                exports.gameSettings.messages.push(checkDeath);
            }
        }
        if (exports.gameSettings.groupHealth < 20) {
            var checkDeath = determineDeath(100);
            console.log('Checkdeath message:' + checkDeath);
            if (checkDeath) {
                exports.gameSettings.messages.push(checkDeath);
        }
    }
}

exports.startGameScreens = [];
exports.gameSettings = new gameData();


exports.resetGame = function(req, res) {
    exports.gameSettings.playerStatus = [true, true, true, true, true];
    exports.gameSettings.milesTraveled = 0;
    exports.gameSettings.daysOnTrail = 0;
    exports.gameSettings.groupHealth = 100;
    exports.gameSettings.currentPace = paces[0];
    exports.gameSettings.food = 2000;
    exports.gameSettings.ration = rationTypes[0];
    this.messages = [];
    
    //update miles traveled
    exports.gameSettings.milesTraveed = 0;
    
    //update health for paces
    exports.gameSettings.groupHealth = 100;
    
    exports.gameSettings.currentTerrain = getRandomTerrain();
    exports.gameSettings.currentWeather = getRandomWeather();
    res.send(exports.gameSettings);
}

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
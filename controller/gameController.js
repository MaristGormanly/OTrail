var exports = module.exports = {};

function gameData() {
    this.playerNames = [];
    this.playerProfession = ""
    this.playerMoney = 0;
    this.startMonth = "";
}

exports.startGameScreens = [];
exports.gameSettings = new gameData();

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

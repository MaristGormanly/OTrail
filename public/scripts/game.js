var currentScreen = 0;

var startMonth;
var profession
var pName;
var player1Name;
var player2Name;
var player3Name;
var player4Name;
var player5Name;


setTimeout(function() { // start a delay
  var fade = document.getElementById('fadeText'); // get required element
  fade.style.opacity = 1; // set opacity for the element to 1
  var timerId = setInterval(function() { // start interval loop
    var opacity = fade.style.opacity; // get current opacity
    if (opacity == 0) { // check if its 0 yet
    fade.style.opacity = 1;
    } else {
      fade.style.opacity = opacity - 0.05; // else remove 0.05 from opacity
    }
  }, 100); // run every 0.1 second
}, 2000); // wait to run after 2 seconds

var gameContainer = document.getElementById('gameContainer');
//console.log(gameContainer)    
function gameScreen(screenNumber) {
    // make async call to server to get requested gameScreen html
    fetch('/game/getNewGameScreen/' + screenNumber).then(function(response) {
        if (response.status !== 200) {
            console.log('problem with ajax call! ' + response.status + ' msg: ' +
            response.value);
            return;
        }
        response.text().then(function(data) {
        // send the html returned back to the
        //console.log("received back: " + data);
            gameContainer.innerHTML = data;
        
        if (currentScreen == 4) {
                showSettings();
            }
        })
    });
}

gameContainer.addEventListener('click', function(e) {
    //get the element clicked
    var targetElement = event.target || event.srcElement;
    
    if (currentScreen == 0) {
        if(targetElement.id == 'bankerMenuItem') {
            profession = 'banker';
            saveProfession('banker');
            currentScreen++;
            gameScreen(1);
        }
        if (targetElement.id =='carpenterMenuItem') { 
            profession = 'carpenter';
            saveProfession('carpenter');
            currentScreen++;
            gameScreen(1);
        }
        if (targetElement.id == 'farmerMenuItem') {
            profession = 'farmer';
            saveProfession('farmer');
            currentScreen++;
            gameScreen(1);
        }
        if (targetElement.id == 'differenceMenuItem') {
            console.log('learn more!');
        }
    }
    if (currentScreen == 1) {
        if (targetElement.id == 'page1sub') {
            pName = document.getElementById("player0").value;
            savePlayer('0', pName);
            currentScreen++;
            gameScreen(2);
        }
    }
    if (currentScreen == 2) {
        if (targetElement.id == 'page2sub') {
            player1Name = document.getElementById("player1").value;
            savePlayer('1', player1Name);
            player2Name = document.getElementById("player2").value;
            savePlayer('2', player2Name);
            player3Name = document.getElementById("player3").value;
            savePlayer('3', player3Name);
            player4Name = document.getElementById("player4").value;
            savePlayer('4', player4Name);
            player5Name = document.getElementById("player5").value;
            savePlayer('5', player5Name);
            currentScreen++;
            gameScreen(3);
        }
    }
    if (currentScreen == 3) {
        if (targetElement.id == 'monthMarch') {
            startMonth = document.getElementById("monthMarch").value;
            saveMonth('March');
            currentScreen++;
            gameScreen(4);
        }
        if (targetElement.id == 'monthApril') {
            startMonth = document.getElementById("monthApril").value;
            saveMonth('April');
            currentScreen++;
            gameScreen(4);
        }
        if (targetElement.id == 'monthMay') {
            startMonth = document.getElementById("monthMay").value;
            saveMonth('May');
            currentScreen++;
            gameScreen(4);
        }
        if (targetElement.id == 'monthJune') {
            startMonth = document.getElementById("monthJune").value;
            saveMonth('June');
            currentScreen++;
            gameScreen(4);
        }
        if (targetElement.id == 'monthJuly') {
            startMonth = document.getElementById("monthJuly").value;
            saveMonth('July');
            currentScreen++;
            gameScreen(4);
        }
        if (targetElement.id == 'monthAugust') {
            startMonth = document.getElementById("monthAugust").value;
            saveMonth('August');
            currentScreen++;
            gameScreen(4);
        }
    }
})

document.addEventListener('keypress', function(e) {
    var keyCode = e.keyCode;
    //get the element clicked
    if (currentScreen == 0) {
        switch (keyCode) {
            case 49: 
                saveProfession('banker');
                currentScreen++;
                gameScreen(1);
                break;
            case 50:  
                saveProfession('carpenter');
                console.log(keyCode);
                currentScreen++;
                gameScreen(1);
                break;
            case 51:
                saveProfession('farmer');
                currentScreen++;
                gameScreen(1);
                break;
            case 52:  
                console.log('learn more!');
                break;
            case 32: 
                window.location = '/mainMenu';
                break;
    }
}
    if (currentScreen == 1) {
        if (keyCode == 13) {
            playerName = document.getElementById('player0').value;
            savePlayer(0, playerName);
            currentScreen++
            gameScreen(2);
        }
    }
    if (currentScreen == 2) {
        if (keyCode == 13) {
            player1Name = document.getElementById("player1").value;
            savePlayer(1, player1Name);
            player2Name = document.getElementById("player2").value;
            savePlayer(2, player2Name);
            player3Name = document.getElementById("player3").value;
            savePlayer(3, player3Name);
            player4Name = document.getElementById("player4").value;
            savePlayer(4, player4Name);
            player5Name = document.getElementById("player5").value;
            savePlayer(5, player5Name);
            currentScreen++;
            gameScreen(3);
        }
    }
    if (currentScreen == 3) {
        switch (keyCode) {
            case 49: 
                saveMonth('March');
                currentScreen++;
                gameScreen(4);
                break;
            case 50: 
                saveMonth('April');
                currentScreen++;
                gameScreen(4);
                break;
            case 51: 
                saveMonth('May');
                currentScreen++;
                gameScreen(4);
                break;
            case 52: 
                saveMonth('June');
                currentScreen++;
                gameScreen(4);
                break;
            case 53: 
                saveMonth('July');
                currentScreen++;
                gameScreen(4);
                break;
            case 54: 
                saveMonth('August');
                currentScreen++;
                gameScreen(4);
                break;
        }
    }
})

function savePlayer(playerNumber, playerName) {
    fetch('/game/saveName/' + playerNumber + '/' + playerName).then(function(response) {
        console.log('/game/savePlayerName/' + playerNumber + '/' + playerName);
       if (response.status != 200) {
          console.log('problems with ajax call! + response.status' + 'msg:' + response.value);  
          return;        
        }
        console.log('Player' + playerNumber + 'Saved!')
    }); 
}

function saveProfession(profession) {
    fetch('/game/saveProfession/' + profession).then(function(response) {
        if (response.status != 200) {
            console.log('problems with ajax call! + response.status' + 'msg:' + response.value);  
            return;        
        }
    })
}

function saveMonth(startMonth) {
    fetch('/game/saveStartMonth/' + startMonth).then(function(response) {
        if (response.status != 200) {
            console.log('problems with ajax call! + response.status' + 'msg:' + response.value);  
            return;        
        }
    })
}

function showSettings() {
    fetch('/game/getSettings').then(function(response) {
        if (response.status != 200) {
            console.log('problems with ajax call! + response.status' + 'msg:' + response.value);  
            return;  
        }            
        
        response.json().then (function(data) {
            populateSettings(data);
            return data;
            })
    })
}

function populateSettings(data) {
    if (currentScreen == 4) {
        document.getElementById("professionChoice").innerHTML = data.playerProfession;
        document.getElementById("monthChoice").innerHTML = data.startMonth;
        document.getElementById("player0").innerHTML = data.playerNames[0];
        document.getElementById("allowance").innerHTML = data.playerMoney;
        document.getElementById("player1").innerHTML = data.playerNames[1];
        document.getElementById("player2").innerHTML = data.playerNames[2];
        document.getElementById("player3").innerHTML = data.playerNames[3];
        document.getElementById("player4").innerHTML = data.playerNames[4];
        document.getElementById("player5").innerHTML = data.playerNames[5];
    }
}
gameScreen(0);
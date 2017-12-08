var optionBoxOpen = false;
var foodBoxOpen = false;

/*
function sendWinningScore(playerName, score) {
    //create the topScore and send it to the post body
    var topScore = new TopScore(playerName, score, new Date());
    
    //make a call to the api to set the pace
    fetch('/game/topTen',
    {method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(topScore)
    })
    .then(function(response) {
        resetGame();
        if (response.status != 200) {
            console.log('problem with ajax call!' + response.status);
            return;
        }
        response.json().then(function(data) {
            console.log('Top Score sent!')
            return data;
        });
    });
}
*/

function nextDay() {
    //make a call to the apo to get the next day into
    fetch('/game/getGameUpdate').then(function(response) {
        if (response.status != 200) {
            console.log('problem with ajax call!' + response.status);
            return;
    }
        response.json().then(function(data) {
            populateSettings(data);
            return data;
        });
    });
}

/*
document.addEventListener('click', function(e) {
    //get the element clicked
    var targetElement = event.target || event.srcElement;
    if (targetElement = 'reset') {
        resetSettings();
    }
})
*/

document.addEventListener('keypress', function(update) {
    var keyCode = update.keyCode;
    console.log(keyCode);    
    if (keyCode == 13) {
        //Hide Food Box
        console.log('Next Day!');
        nextDay();
        showSettings();
    }
    
    if (keyCode == 32) {
        console.log('Food Box');
        //Show Food Box
        if (foodBoxOpen) {
            document.getElementById('foodBox').style.visibility = 'hidden';
            foodBoxOpen = false;
            console.log('Food Box is hidden!');
        }
        else {
            document.getElementById('foodBox').style.visibility = 'visible';
            foodBoxOpen = true;
            console.log('Pick a rationing!');
        }
    }
    
    if (keyCode == 32) {
        console.log('Pace Box');
        if (optionBoxOpen) {
            //Hide Pace Box
            document.getElementById('optionBox').style.visibility = 'hidden';
            optionBoxOpen = false;
            console.log('Pacebox is hidden!');
        }
        else {
            //Show Pace Box
            document.getElementById('optionBox').style.visibility = 'visible';
            optionBoxOpen = true;
            console.log('Pick a Pace');
        }
    }
    
    if (keyCode == 114) {
        resetSettings();
    }
    
    if (optionBoxOpen) {
        var optionBox = document.getElementById('optionBox');
        if (keyCode == 49)  {//1 
            sendPace('Steady');
            optionBoxOpen = false;
            optionBox.style.visibility = 'hidden';
        }
        if (keyCode == 50) {//2 
            sendPace('Strenuous');
            optionBoxOpen = false;
            optionBox.style.visibility = 'hidden';
        }
        if (keyCode == 51) {//3 
            sendPace('Grueling');
            optionBoxOpen = false;
            optionBox.style.visibility = 'hidden';
        }
        if (keyCode == 52) {//4 
            sendPace('Resting');
            optionBoxOpen = false;
            optionBox.style.visibility = 'hidden';
        }
    }
    
    if (foodBoxOpen) {
        var foodBox = document.getElementById('foodBox')
        if (keyCode == 53) {//5 
            sendRation('Filling');
            foodBoxOpen = false;
            foodBox.style.visibility = 'hidden';
        }
        if (keyCode == 54) {//6 
            sendRation('Meager');
            foodBoxOpen = false;
            foodBox.style.visibility = 'hidden';
        }
        if (keyCode == 55) {//7 
            sendRation('Bare-Bones');
            foodBoxOpen = false;
            foodBox.style.visibility = 'hidden';
        }
    }
})

function sendPace(pace) {
    console.log(pace);
    fetch('/game/changePace/' + pace).then(function(response) {
        if (response.status != 200) {
            console.log('problems with ajax call! + response.status' + 'msg:' + response.value);  
            return;
        showSettings();
        console.log('Start Month' + pace + 'saved!');    
        } 
    });  
}

function sendRation(ration) {
    console.log(ration);
    fetch('/game/changeRation/' + ration).then(function(response) {
        if (response.status != 200) {
            console.log('problems with ajax call! + response.status' + 'msg:' + response.value);  
            return;
        showSettings();
        console.log('Start Month' + ration + 'saved!');    
        } 
    });  
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

function resetSettings() {
    fetch('/game/resetGame').then(function(response) {
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


function moveWagon(miles) {
    var mileMovement = (miles / 5);
    //console.log(miles);
    document.getElementById('wagonImage').style.right = mileMovement + '%';
}

function populateSettings(data) {
    document.getElementById('travelDays').innerHTML = data.daysOnTrail;
    document.getElementById('milesTraveled').innerHTML = data.milesTraveled;
    document.getElementById('currentHealth').innerHTML = data.groupHealth;
    document.getElementById('currentWeather').innerHTML = data.currentWeather.type;
    document.getElementById('currentTerrain').innerHTML = data.currentTerrain.name;
    document.getElementById('terrainImage').innerHTML = '<img src=\'' + data.currentTerrain.url + '\'>';
    document.getElementById('currentPace').innerHTML = data.currentPace.name;
    document.getElementById('currentRationing').innerHTML = data.ration.name;
    document.getElementById('currentFood').innerHTML = data.food;
    var alive = 0;
    for (var i = 0; i < data.playerStatus.length; i++) {
        console.log(data.playerStatus[i]);
        if (data.playerStatus[i] == true) {
            alive++;
        }
    document.getElementById('aliveMembers').innerHTML = alive;
    document.getElementById('messageBox').innerHTML = data.messages
    data.messages.innerHTML = '';
    moveWagon(data.milesTraveled);
    }
}

showSettings();
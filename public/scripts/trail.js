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

function nextDay() {
    //make a call to the apo to get the next day into
    fetch('/game/getGameUpdate') {
        if (response.status != 200) {
            console.log('problem with ajax call!' + response.status);
    }
        response.json().then(function(data) {
            populateSettings(data);
            return data;
        });
    }
}

function populateSettings(gameData) {
    //see if there are any messages to display
    console.log('messages: ' + gameData.messages.length);
    console.log('data: ' + gameData.groupHealth);
    messagebox.innerHTML = '';
}
var sound1 = new Audio('../music/Music.mp3')
sound1.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
//sound1.play();

function checkSound() {
    
    var playingAudio = sessionStorage.getItem('soundStatus');
    
    console.log(playingAudio);
    if (playingAudio == 'true') {
        // start music
        sound1.play();
    } else {
        // Stop the music
        sound1.pause();
    }
    
}
checkSound();

function toggleSound() {
    var playingAudio = sessionStorage.getItem('soundStatus');
    if(playingAudio == 'true') {
        playingAudio = 'false';
    }
    else {
        playingAudio = 'true';
    }
    console.log(playingAudio);
    sessionStorage.setItem('soundStatus', playingAudio)

    var myElement = document.getElementById('soundToggle');
    myElement.innerHTML = '4. Turn Sound ' + (playingAudio ? 'Off' : 'On &nbsp;&nbsp;'); 
    
    //(window["isSoundOn"]) ? isSoundOn = true : isSoundOn = false;
    checkSound();

}


document.onkeypress = function(nav) {
    if (nav.keyCode === 32) {
        console.log('key pressed');
        window.location = '/mainmenu';     
    }
    if (nav.keyCode === 49) {
        window.location = '/game';     
    }
    if (nav.keyCode === 51) {
        window.location = '/topten';
    }
    if (nav.keyCode === 52) {
        toggleSound();
    }
}



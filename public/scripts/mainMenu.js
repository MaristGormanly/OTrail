document.addEventListener('keypress', function(e) {
    if (e.keyCode == 32) {
        console.log('key pressed');
        window.location = '/mainmenu';  
    }
    if (e.keyCode == 49) {
        console.log('keypress');
        window.location = '/game';  
        }
    if (e.keyCode == 51) {
        window.location = '/topten';
    }
    if (e.keyCode == 52) {
        toggleSound();
    }
})
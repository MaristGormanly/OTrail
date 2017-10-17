setTimeout(function() { // start a delay
  var fade = document.getElementById("fadeInOut"); // get required element
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

var el = document.getElementById('fadeInOut');
el.onclick = function() {
    window.location = '/mainmenu'
}
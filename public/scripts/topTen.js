var topScores = new Array()
function topScoreObject(name, year, score) {
    this.name = name;
    this.year = year;
    this.score = score;
}
    topScores[0] = new topScoreObject('Lazslo','May 8, 2010', 13948),
    topScores[1] = new topScoreObject('Daniel', 'September 30, 2017', 18452),
    topScores[2] = new topScoreObject('Sancho', 'June 16, 2014', 7294),
    topScores[3] = new topScoreObject('Liz', 'September 26, 2010', 13948),
    topScores[4] = new topScoreObject('Elise', 'July 4, 2012', 16109),
    topScores[5] = new topScoreObject('Desmond', 'January 29, 2017', 6508),
    topScores[6] = new topScoreObject('Thomas', 'October 21, 2016', 13395),
    topScores[7] = new topScoreObject('Jonathan', 'April 5, 2010', 8293),
    topScores[8] = new topScoreObject('Gabrielle', 'February 29, 2015', 7098),
    topScores[9] = new topScoreObject('Josh', 'January 3, 2011', 7073);

//topScores.sort(function(a,b) {return b.score - a.score});


console.log(topScores)
    
var el = ""
document.getElementById("ttlist").innerHTML = el;
for (var i = 0; i < topScores.length; i++) {
    topScores.sort(function(a,b) {return b.score - a.score});
    el +=
     topScores[i].name  + " " +
     topScores[i].year  + " " +
     topScores[i].score + " <br>"
   
}

document.getElementById("ttlist").innerHTML = el;

setTimeout(function() { // start a delay
  var fade = document.getElementById("fadeText"); // get required element
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

document.addEventListener('keypress', function(e) {
    if (e.keyCode == 32) {
        console.log('key pressed');
        window.location = '/mainmenu';  
    }
})


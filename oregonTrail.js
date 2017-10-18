const express = require('express')
const app = express()

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

app.listen(1337, function () {
  console.log('Example app listening on port 1337!')
})

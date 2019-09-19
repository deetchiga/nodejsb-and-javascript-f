
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var path = require("path")
//app.use('/static', express.static(path.join(__dirname, 'nodejsexercise')))

const db = require('./queries')
const port =8000

const request = require('request');


app.get('/', (request, response) => {
 
 response.sendFile(path.join( __dirname,'fe', 'front.html' ));
})

app.get('/users', db.getUsers)
app.post('/users1', db.createUser)
app.post('/Actors1',db.createActor)
app.put('/Actor/:actor_id', db.updateActor)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

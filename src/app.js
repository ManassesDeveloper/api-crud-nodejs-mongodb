const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

// body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// Rotas
const router = require('./routes/router')
app.use(router)


// Conexão com mongoDB
 mongoose.connect('mongodb://localhost/aula', {
     useNewUrlParser: true,
     useUnifiedTopology: true
})


app.listen(3000)
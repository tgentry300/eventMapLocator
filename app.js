const express = require('express')
const path = require('path')
const fs = require('fs')

const publicPath = 'public/'
const app = express()

port = 3000

app.set('view engine', 'pug')
app.set("views", path.join(__dirname, "views"));

app.use(express.static(publicPath));
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index')
})




app.listen(port)
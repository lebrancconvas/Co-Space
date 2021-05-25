/* eslint-disable */
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cospace'
})

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

app.use(bodyParser.urlencoded({ extented: true }))
app.use(bodyParser.json())

app.use(express.static(__dirname + "/dist/"));

app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
});

app.post('/auth', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    if (username && password) {
        connection.query('SELECT * FROM account WHERE username = ? AND password = ?', [username, password], (error, results, fields) => {
            if (results.length > 0) {
                req.session.loggedin = true
                req.session.username = username
                res.redirect('/home')
            } else {
                res.send('Wrong Username and/or Password.')
            }
            res.end()
        })
    } else {
        res.send('Please Enter Username and Password !!')
        res.end()
    }
})

app.get('/home', (req, res) => {
    if (req.session.loggedin) {
        res.send(`Welcome ${req.session.username}`)
    } else {
        res.send('Please Login to be in This Page.')
    }
    res.end()
})

app.listen(port);
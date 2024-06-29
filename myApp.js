let express = require('express');
const { log } = require('fcc-express-bground');
let app = express();
console.log("Hello World")

app.get("/", hello)
absolutePath = __dirname + '/views/index.html'

function hello(req, res) {
    res.sendFile(absolutePath)
}































 module.exports = app;

let express = require('express');
const { log } = require('fcc-express-bground');
let app = express();
console.log("Hello World")

app.get("/", hello)

function hello(req, res) {
    res.send('Hello Express')
}































 module.exports = app;

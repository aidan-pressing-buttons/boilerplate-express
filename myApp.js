let express = require('express');
const { log } = require('fcc-express-bground');
let app = express();
absolutePath = __dirname + '/views/index.html'
middlewarePath = __dirname + '/public'
console.log("Hello World")

app.get("/", hello)
app.use("/public", express.static(middlewarePath))


function hello(req, res) {
    res.sendFile(absolutePath)
}





























 module.exports = app;

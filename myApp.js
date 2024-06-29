require('dotenv').config()
let express = require('express');
const { log } = require('fcc-express-bground');
let app = express();
absolutePath = __dirname + '/views/index.html'
middlewarePath = __dirname + '/public'
console.log("Hello World")
json = {"message": "Hello json"}
app.get("/", hello)
app.get("/json", getJSON)
app.use("/public", express.static(middlewarePath))

function getJSON(req, res){
    if (process.env.MESSAGE_STYLE == "uppercase"){
        res.json({"message": "HELLO JSON"})
    } else{
        res.json({"message": "Hello json"})
    }
}
function hello(req, res) {
    res.sendFile(absolutePath)
}





























 module.exports = app;

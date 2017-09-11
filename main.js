var express = require('express');
let app = express();
var path = require('path');

var mongoose = require('mongoose');


var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
const htmlDirPATH = "/views/";
app.use(bodyParser.json());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) =>{
    res.render("inputs",{inputLabel:'snalte'});
    console.log(JSON.stringify(req.body));
}).listen(3000,()=>{
    console.log('Server started on 3000');
});

app.post('/', (req, res) =>{
    console.log('Submit requested!');
});
app.post('/person_create/', (req,res)=>{
    req.checkBody('firstName', 'Invalid name').isAlpha();
    req.checkBody('lastName', 'Invalid lastName').isAlpha();
    console.log(req.body.first);
});

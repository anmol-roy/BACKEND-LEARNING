const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const Path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(Path.join(__dirname, 'public')));

app.get("/", function(req,res){
    res.render("index");
}) ;

app.get("/profile/:username/:age", function(req,res){
    res.send(`Username: ${req.params.username}, Age: ${req.params.age}`);
}) ;

app.listen(3000, function(){
    console.log("Server started at port 3000");
}); 
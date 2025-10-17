const express = require('express');
const app = express();

app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});

app.get( '/' , function ( req, res){
    res.send('Hello Worl    d!');
});
app.listen(3000)
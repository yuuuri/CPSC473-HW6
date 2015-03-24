// CPSC473 Assignment 6
// Mario Andrade & Yuri Van Steenburg
// Consultants: Chris Danan, Sarah Lee, Henry Le
// https://www.npmjs.com/package/body-parser

var express = require("express"),
    bodyParser = require("body-parser"),
    http = require("http"),
    app = express();

/*
 * body-parser is a piece of express middleware that reads
 * a form's input and store it as a javascript object accesible
 * through 'req.body
 *
 * http://expressjs.com/api.html
 *
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // for parsing applicaiton/json

// set up a static file directory to use the default routing 
app.use(express.static(__dirname + "/client"));

// create our Express-powered HTTP server
http.createServer(app).listen(3000);

// set up routes
app.get("/test", function(req, res) {
    res.send("This is the test route");
});

/*
 * server receive json object created by clicking the button
 * by user with post
 */
app.post('/play/rock',function(req, res) {
    //var rock = req.body.move;

    // create javascript object, object will be sent back to 
    // client side
    var obj = { outcome: 0, wins: 0, losses: 0, ties: 0};    
        obj.outcome = outcome,
        obj.wins = wins,
        obj.losses = losses,
        obj.ties = ties;

        //sending result back to client
        console.log(obj);
        
        
    )};






// this will redirect to the route if user put wrong route
app.get("*", function(req, res) {
    res.redirect("/");
});

// CPSC473 Assignment 6
// Mario Andrade & Yuri Van Steenburg
// Consultants: Chris Danan, Sarah Lee, Henry Le
// https://www.npmjs.com/package/body-parser

var express = require("express"),
    bodyParser = require("body-parser"),
    http = require("http"),
    app = express(),
    outcome,
    wins = 0,
    ties = 0,
    losses = 0,
    playerChoice,
    serverChoice;


// reuse from hw5
// random number generator for rock, paper, scissors, lizard, spock
function randomChoice() {
    var choice = ["rock", "paper", "scissors", "lizard", "spock"],
        random = Math.floor(Math.random() * 5);
    return choice[random];
}

// reuse from hw5
// called by app.post, generates serverChoice returns outcome and update
// results
function result(playerChoice) {
    var serverChoice = randomChoice();
    console.log("******   SERVER SIDE   *******");
    console.log("PLAYER CHOICE: " + playerChoice);
    console.log("SERVER CHOICE: " + serverChoice);
    if (playerChoice === "rock") {
        if ((serverChoice === "scissors") || (serverChoice === "lizard")) { //player wins
            outcome = 'win';
            wins++;
        } else if (serverChoice === "rock") { //player ties with server
            outcome = 'tie';
            ties++;
        } else { //otherwise player loses
            outcome = 'lose';
            losses++;
        }
    }else if (playerChoice === "paper") {
         if ((serverChoice === "rock") || (serverChoice === "spock")) {
            outcoe ='win';
            wins++;
        } else if (serverChoice === "paper") {
            outcoe ='tie';
            ties++;
        } else {
            outcome ='lose';
            losses++;
        }   
    }else if (playerChoice === "scissors") {
         if ((serverChoice === "lizard") || (serverChoice === "paper")) {
            outcome ='win';
            wins++;
        } else if (serverChoice === "scissors") {
            outcoe ='tie';
            ties++;
        } else {
            outcome = 'lose';
            losses++;
        }    
    }else if (playerChoice === "lizard") {
         if ((serverChoice === "spock") || (serverChoice === "paper")) {
            outcoe ='win';
            wins++;
        } else if (serverChoice === "lizard") {
            outcome = 'tie';
            ties++;
        } else {
            outcome = 'lose';
            losses++;
        }    
    }else if (playerChoice === "spock") {
         if ((serverChoice === "scissors") || (serverChoice === "rock")) {
            outcome ='win';
            wins++;
        } else if (serverChoice === "spock") {
            outcome = 'tie';
            ties++;
        } else {
            outcome = 'lose';
            losses++;
        }    
    }else{
         //res.write("{\"error\" : \"happened in result function\"}");
         console.log("error happend in result function...");
    }

} // end of result function




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

    result('rock');

    // create javascript object, object will be sent back to 
    // client side
    var obj = { playerChoice: '', serverChoice: '', outcome: '', wins: 0, losses: 0, ties: 0};
        obj.playerChoice = playerChoice;
        obj.serverChoice = serverChoice;
        obj.outcome = outcome;
        obj.wins = wins;
        obj.losses = losses;
        obj.ties = ties;

        // sending result back to client
        console.log(obj);
        // responding to client
        res.json(obj); 
        
});

app.post('/play/paper',function(req, res) {
    //var rock = req.body.move;

    result('paper');

    // create javascript object, object will be sent back to 
    // client side
    var obj = { playerChoice: '', serverChoice: '', outcome: '', wins: 0, losses: 0, ties: 0};
        obj.playerChoice = playerChoice;
        obj.serverChoice = serverChoice;
        obj.outcome = outcome;
        obj.wins = wins;
        obj.losses = losses;
        obj.ties = ties;

        // sending result back to client
        console.log(obj);
        // responding to client
        res.json(obj); 
        
});

app.post('/play/scissors',function(req, res) {
    //var rock = req.body.move;

    result('scissors');

    // create javascript object, object will be sent back to 
    // client side
    var obj = { playerChoice: '', serverChoice: '', outcome: '', wins: 0, losses: 0, ties: 0};
        obj.playerChoice = playerChoice;
        obj.serverChoice = serverChoice;
        obj.outcome = outcome;
        obj.wins = wins;
        obj.losses = losses;
        obj.ties = ties;

        // sending result back to client
        console.log(obj);
        // responding to client
        res.json(obj); 
        
});

app.post('/play/lizard',function(req, res) {
    //var rock = req.body.move;

    result('lizard');

    // create javascript object, object will be sent back to 
    // client side
    var obj = { playerChoice: '', serverChoice: '', outcome: '', wins: 0, losses: 0, ties: 0};
        obj.playerChoice = playerChoice;
        obj.serverChoice = serverChoice;
        obj.outcome = outcome;
        obj.wins = wins;
        obj.losses = losses;
        obj.ties = ties;

        // sending result back to client
        console.log(obj);
        // responding to client
        res.json(obj); 
        
});

app.post('/play/spock',function(req, res) {
    //var rock = req.body.move;

    result('spock');

    // create javascript object, object will be sent back to 
    // client side
    var obj = { playerChoice: '', serverChoice: '', outcome: '', wins: 0, losses: 0, ties: 0};
        obj.playerChoice = playerChoice;
        obj.serverChoice = serverChoice;
        obj.outcome = outcome;
        obj.wins = wins;
        obj.losses = losses;
        obj.ties = ties;

        // sending result back to client
        console.log(obj);
        // responding to client
        res.json(obj); 
        
});


// this will redirect to the route if user put wrong route
app.get("*", function(req, res) {
    res.redirect("/");
});

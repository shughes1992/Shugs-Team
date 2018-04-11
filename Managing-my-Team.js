// dependency for inquirer npm package
var inquirer = require("inquirer");

//creating player constructor function

var Player = function (name, position, offense, defense, goodGame, badGame) {

    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = goodGame;
    this.badGame = badGame;
}

Player.prototype.printStats = function () {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
        "\nPosition: " + this.position + "\nGood Game: " + this.goodGame + "\nBad Game: " + this.badGame);
    console.log("---------------");
};

var count = 0;

var playerArray = [];

var playerStats = function () {
    if (count < 3) {
        console.log("New player!!!")

        inquirer.prompt([
            {
                name: "name",
                message: "What is your nickname?"
            },
            {
                name: "position",
                message: "What position do you wish to play?"
            },
            {
                name: "offense",
                message: "How AMAZING are you in an offensive position? (Pick a number between 1-10)"
            },
            {
                name: "defense",
                message: "How AMAZING are you in a defensive position? (Pick a number between 1-10)"
            }

        ]).then(function (players) {

            var newPlayer = new Player(
                players.name,
                players.position,
                players.offense,
                players.defense
            );

            playerArray.push(newPlayer);

            // newPlayer.printStats();

            count++;

            //calling the playerstats function from above

            playerStats();

        })
    }

    else {

        playerArray.printStats();
        
        console.log("All players welcome to the best team ever!!")
    }
}

playerStats();



    // when all players have entered their information (stats), we want to run this code 

// var playGame = function() {

//     if (Math.floor(Math.random() * 10 > 

    
// }



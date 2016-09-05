var prompt = require('prompt-sync')();

$(document).ready(function(){
    $('#submit').on('click', gameStart);
});

$(document).ready(function(){
    update_bank();
})

var game = {
    bet: null,
    bank: 100,
    randNumber: null,
    numberGuess: null,
    getBetAmount: function() {
        return this.bet = parseInt($('#bet').val());
    },
    getRandomNumber: function(min, max) {
        return this.randNumber = Math.floor(Math.random()*(max-min+1)+min);
    },
    getNumberGuess: function() {
        return this.numberGuess = parseInt($('#guess').val());
    },
};

function update_bank(){
    document.querySelector('#balance').innerHTML = game.bank;
};


function gameStart() {
    game.getBetAmount();
    game.getRandomNumber(1,10);
    game.getNumberGuess();

    console.log("randNum:" + game.randNumber + " - guess: " + game.numberGuess);

    if(game.bet > game.bank) {
        console.log("Think again")
        game.getBetAmount();
    }else{
        game.bank -= game.bet;
        update_bank();
        if(game.randNumber === game.numberGuess) {
            console.log("Bingo!" + " Here is your reward" + "  $" + (game.bet * 2) + " !" );
            game.bank += (game.bet * 2);
            console.log(game.bank);
            update_bank();
        }else if((game.numberGuess + 1 || game.numberGuess -1) === game.randNumber){
            console.log("Awwwwwww. take your money back");
            game.bank += game.bet
            console.log(game.bank);
            update_bank();
        }else{
            console.log("You are done! Guess again");
            console.log(game.bank);
            update_bank();
        };
    };
};

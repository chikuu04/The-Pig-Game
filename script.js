var scores,roundScore,activePlayer,gamePlaying;


//initialization function
init();

//On click to roll dice this event should happen
document.querySelector('.btn-roll').addEventListener('click', function () {

        if(gamePlaying){
                //1. random number in whole between 1 and 6
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. display the result
        var diceDOM =   document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'img/dice-' + dice + '.png';
        
        //3.update round score if rolled number was not 1
        if(dice !== 1){
            //add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //next player
            nextPlayer();
        }
        }
        
});


//on click to hold this should happen
document.querySelector('.btn-hold').addEventListener('click', function () {

        if(gamePlaying){
             //add current score to global score
        scores[activePlayer] += roundScore;

        //update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        //check who won
        if(scores[activePlayer] >= 20){
            document.querySelector('#name-'+activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        } else {
            nextPlayer();
        }
        }
       
});


//function for next player
function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            document.querySelector('.dice').style.display= 'none';
}


//on click to new game this should happen
document.querySelector('.btn-new').addEventListener('click', init);

//init function
function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    //At the starting of game dice should be invisible
     document.querySelector('.dice').style.display = 'none';

    //At the starting all the scores should be set to zero
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
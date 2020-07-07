var scores, totalScore, dice, activePlayer, gamePlaying;
init();

//When the user click on the Roll Dice button
document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
    //Generating a ranoom number
    dice = Math.floor(Math.random()*6)+1;

    //selecting the active player and updating his current score
    document.querySelector('#current-' +activePlayer).textContent = dice;

    //Code for changing the dice image corresponding to the rolled dice value
    var diceImg = document.querySelector('.dice');
    diceImg.style.display = 'block';
    diceImg.src = 'dice-' +dice+ '.png';

    //Add the player score as they roll the dice and make it 0 when the dice is rolled to a 1
    if(dice!=1)
    {
        totalScore+= dice;
        document.querySelector('#current-' +activePlayer).textContent = totalScore;
    }
    else {
       nextPlayer();
    }
}
});

//When the user click on the Hold Dice button

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
    //Add the current score to the Total Score
    scores[activePlayer] += totalScore;
    document.getElementById('score-' +activePlayer).textContent = scores[activePlayer];
    if(totalScore >=20) {
        document.getElementById('name-' +activePlayer).textContent = 'WINNER';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' +activePlayer+ '-panel').classList.add('winner');
        document.querySelector('.player-' +activePlayer+ '-panel').classList.remove('active');
        gamePlaying = false;
    }
    else {
        nextPlayer();   
    }
}
});

//When the user click on the New Game button

document.querySelector('.btn-new').addEventListener('click',init);

//Function to change the player
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    totalScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    diceImg.style.display = 'none';
}

//Function to initialize the values
function init()
{
    scores = [0,0];
    totalScore = 0;
    dice;
    activePlayer = 0;
    gamePlaying ="true";
    document.querySelector('#name-0').textContent = "Player 1";
    document.querySelector('#name-1').textContent = "Player 2";
    document.querySelector('#score-0').textContent = "0";
    document.querySelector('#score-1').textContent = "0";
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;


}
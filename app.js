/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

Pig Game is a dice game in which the first who scores 100 or more points, wins. Each turn, you can roll a dice
 until a 1 is rolled (and you lose your turn) or you can hold your current score
*/

var activePlayer,score=[0,0],roundScore, gameActive;

init();


document.querySelector('.btn-roll').addEventListener('click',function(){
	
	if (gameActive){
		//Event Listner Function
	var randomNumber=Math.floor(Math.random()*6)+1;

	if(randomNumber!==1){
		roundScore+=randomNumber;
		document.getElementById('current-'+activePlayer).textContent=roundScore;
		document.querySelector('.dice').style.display='block';
		document.querySelector('.dice').src='dice-'+randomNumber+'.png';
	}else{
		changePlayer();
	}
	};
	
});

document.querySelector('.btn-hold').addEventListener('click',function(){
	
	if (gameActive){
		score[activePlayer]+=roundScore;
		document.getElementById('score-'+activePlayer).textContent=score[activePlayer];
	
	if (score[activePlayer]>=100){
		document.querySelector('.dice').style.display='none';
		document.querySelector('#name-'+activePlayer).textContent='Winner!';
		document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
		gameActive=false;
	}

	changePlayer();
	};
	
});

document.querySelector('.btn-new').addEventListener('click',init);

function changePlayer(){
	if(gameActive){
		roundScore=0;
		document.getElementById('current-'+activePlayer).textContent=roundScore;
		activePlayer===1?activePlayer=0:activePlayer=1;
		document.querySelector('.dice').style.display='none';
		
		document.getElementById('current-'+activePlayer).textContent=roundScore;
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
	};
		
};

function init(){
	gameActive=true;
	roundScore=0;
	score=[0,0];
	activePlayer=0;
	document.querySelector('.dice').style.display='none';
	document.getElementById('score-0').textContent=0;
	document.getElementById('score-1').textContent=0;
	document.getElementById('current-0').textContent=0;
	document.getElementById('current-1').textContent=0;
	document.querySelector('.player-0-panel').classList.add('active');
	document.querySelector('.player-1-panel').classList.remove('active');

	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');

	document.querySelector('#name-0').textContent='Player 1';
	document.querySelector('#name-1').textContent='Player 2';
	// document.querySelector('.player-0-panel').classList.add('active');
};

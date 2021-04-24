	
	var scores, roundScore, activePlayer, dice;

	init();

	var round = document.getElementById('round-player-' + activePlayer);
	var diceDOM = document.querySelector('.dice-image');	

	function nextPlayer() {
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		document.getElementById('round-player-0').textContent = 0;
		document.getElementById('round-player-1').textContent = 0;
		document.querySelector('.player-0').classList.toggle('active');
		document.querySelector('.player-1').classList.toggle('active');
		diceDOM.style.display = 'none';
	}

	function rollTheDice() {

		dice = (Math.floor(Math.random() * 6)) + 1;
		diceDOM.src = 'dice-' + dice + '.jpg';
		diceDOM.style.display = 'block';

		if(dice !== 1) {
			roundScore += dice;
			document.getElementById('round-player-' + activePlayer).textContent = roundScore;					
		} else {
			nextPlayer();
		}


	}
	
	var rollDice = document.getElementById('roll-dice').addEventListener('click', rollTheDice);

	document.getElementById('hold-btn').addEventListener('click', function () {
		
		scores[activePlayer] += roundScore;
		document.getElementById('player-' + activePlayer + '-scores').textContent = scores[activePlayer];
		if(scores[activePlayer] >= 100) {
			document.getElementById('player-' + activePlayer + '-name').textContent = 'Laimėtojas';
			diceDOM.style.display = 'none';
			document.getElementById('roll-dice').style.display = 'none';
			document.getElementById('hold-btn').style.display = 'none';
			document.getElementById('round-player-' + activePlayer).textContent = 0;
		} else {
			nextPlayer();
		}
		

	});

	document.querySelector('.new-game_btn').addEventListener('click', function() {
		init();
	});

	function init() {

		scores = [0,0];
		activePlayer = 0;
		roundScore = 0;

		document.getElementById('round-player-0').textContent = 0;
		document.getElementById('round-player-1').textContent = 0;
		document.getElementById('player-0-scores').textContent = 0;
		document.getElementById('player-1-scores').textContent = 0;
		document.getElementById('player-0-name').textContent = 'Aš';
		document.getElementById('player-1-name').textContent = 'Kompiuteris';
		document.querySelector('.dice-image').style.display = 'none';
		document.getElementById('roll-dice').style.display = 'block';
		document.getElementById('hold-btn').style.display = 'block';

	}
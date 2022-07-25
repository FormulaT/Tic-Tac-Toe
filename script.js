window.onload = () => {

    const boxes = Array.from(document.getElementsByClassName('box'));
    const status = document.getElementById('status');
    const playerOneScore = document.getElementById('p1-score');
    const PlayerTwoScore = document.getElementById('p2-score');

    const playerOne = {
        name: '❌',
        turn: true,
        score: 0,
    };
    const playerTwo = {
        name: '⭕',
        turn: false,
        score: 0,
    };

    document.getElementById('p1-name').innerHTML = 'Player ' + playerOne.name;

    let currentStatus = playerOne.name + '\'s turn';    

    document.getElementById('p2-name').innerHTML = 'Player ' + playerTwo.name;

    function checkWinner() {
        let v = [];
        for (let i = 0; i < boxes.length; i++) {
            v[i] = boxes[i].innerHTML;
        }
        if (//horizontal
            (v[0] && v[0] == v[1] && v[1] == v[2]) ||
            (v[3] && v[3] == v[4] && v[4] == v[5]) ||
            (v[6] && v[6] == v[7] && v[7] == v[8]) ||
            //vertical
            (v[0] && v[0] == v[3] && v[3] == v[6]) ||
            (v[1] && v[1] == v[4] && v[4] == v[7]) ||
            (v[2] && v[2] == v[5] && v[5] == v[8]) ||
            //diagonal
            (v[0] && v[0] == v[4] && v[4] == v[8]) ||
            (v[2] && v[2] == v[4] && v[4] == v[6]) ) { return true; } 
        else { return false }
    }
    function Draw(box) {
        return box.innerHTML == '❌' || box.innerHTML == '⭕';
    }
    function statusUpdate() {
        playerOne.turn = !playerOne.turn;
        playerTwo.turn = !playerTwo.turn;
        currentStatus = (playerTwo.turn) ? `${playerTwo.name}'s turn` : `${playerOne.name}'s turn`; 
    }
    function boxClick(e) {
        removeEventListener(e.target);
        e.target.innerHTML = (playerOne.turn) ? '❌' : '⭕';
        if (checkWinner()) {
            for (let box of boxes) box.removeEventListener('click', boxClick);
            if (playerOne.turn) {
                playerOne.score++;
                currentStatus = `${playerOne.name} has won the game!`;
            }else {
                playerTwo.score++;
                currentStatus = `${playerTwo.name} has won the game!`;
            }
        }else{
            if (boxes.every(Draw)) currentStatus = 'Its  draw!';
            else statusUpdate();
        }        
    }
    function addEventListeners() {
        boxes.forEach(box => {
            box.innerHTML = null;
            box.addEventListener('click', boxClick);
        });
    }
    function removeEventListener(element) {
        element.removeEventListener('click', boxClick);
    }
    function updateGameValues() {
        status.innerHTML = currentStatus;
        playerOneScore.innerHTML = playerOne.score;
        PlayerTwoScore.innerHTML = playerTwo.score;        
        requestAnimationFrame(updateGameValues);
    }
    requestAnimationFrame(updateGameValues)
    addEventListeners();
    
    document.getElementById('reset-scores').onclick = () => {
        playerOne.score = 0;
        playerTwo.score = 0;
    }
    document.getElementById('play-again').onclick = () => {
        addEventListeners();
        for (let box of boxes) box.innerHTML = null;
        currentStatus = (playerTwo.turn) ? `${playerTwo.name}'s turn` : `${playerOne.name}'s turn`;
    }

}
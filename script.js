window.onload = () => {

    const boxes = Array.from(document.getElementsByClassName('box'));
    const status = document.getElementById('status');
    const playerOneScore = document.getElementById('p1-score');
    const PlayerTwoScore = document.getElementById('p2-score');

    const p1 = window.prompt('Enter Player One\'s Name', 'PlayerOne')
    const p2 = window.prompt('Enter Player Two\'s Name', 'PlayerTwo')
    
    document.getElementById('p1-name').innerHTML = p1;
    document.getElementById('p2-name').innerHTML = p2;

    const playerOne = {
        name: p1,
        turn: true,
        score: 0,
    };
    const playerTwo = {
        name: p2,
        turn: false,
        score: 0,
    };
    let currentStatus = playerOne.name + '\'s turn';

    function checkWinner() {
        
    }
    function boxClick(e) {
        removeEventListener(e.target);
        e.target.innerHTML = (playerOne.turn) ? 'X' : 'O';
        checkWinner();
        playerOne.turn = !playerOne.turn;
        playerTwo.turn = !playerTwo.turn;
        currentStatus = (playerTwo.turn) ? `${playerTwo.name}'s turn` : `${playerOne.name}'s turn`; 
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
        requestAnimationFrame(updateGameValues)
    }
    updateGameValues();
    addEventListeners();

    
}
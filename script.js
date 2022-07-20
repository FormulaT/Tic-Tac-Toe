window.onload = () => {

    const boxes = Array.from(document.getElementsByClassName('box'));
    const status = document.getElementById('status');
    const playerOneScore = document.getElementById('p1-score');
    const PlayerTwoScore = document.getElementById('p2-score');

    const p1 = window.prompt('Enter Player One\'s Name', 'PlayerOne')
    const p2 = window.prompt('Enter Player Two\'s Name', 'PlayerTwo')
    
    document.getElementById('p1-name').innerHTML = p1;
    document.getElementById('p2-name').innerHTML = p2;
    
    const game = new TicTacToe(boxes, p1, p2);

    function updateGameValues() {
        status.innerHTML = game.status;
        playerOneScore.innerHTML = game.playerOne.score;
        PlayerTwoScore.innerHTML = game.playerTwo.score;        
        requestAnimationFrame(updateGameValues)
    }
    updateGameValues();
}
class TicTacToe {
    constructor(boxes, playerOneName, playerTwoName) {
        this.boxes = boxes;
        this.status = playerOneName + "'s turn"
        this.playerOne = {
            name: playerOneName,
            turn: true,
            score: 0,
            losses: 0,
            wins: 0
        };
        this.playerTwo = {
            name: playerTwoName,
            turn: false,
            score: 0,
            losses: 0,
            wins: 0
        };
        this.boxes.forEach(box => {
            box.innerHTML = '';
            box.addEventListener('click', this.boxClick);
        });
    }
    boxClick(e) {
        console.log(`Box ${parseInt(e.target.id) + 1} Clicked!`)
    }
}
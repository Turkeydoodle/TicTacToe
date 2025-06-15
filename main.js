canvas = document.getElementById('canvas')
input = document.getElementById('input')
context = canvas.getContext('2d')
enter = document.getElementById('enter')
turnd = document.getElementById('turn')
canvas.width = 500
canvas.height = 500
let boardState = ['', '', '', '', '', '', '', '', ''];
const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]            
];
squaresopen = [0, 1, 2, 3, 4, 5, 6, 7, 8]
turn = 'player'
function drawbackground() {
    context.fillStyle = 'black';
    context.fillRect(166.6666666666666, 0, 5, 500);
    context.fillRect(335, 0, 5, 500);
    context.fillRect(0, 166.666666666666, 500, 5);
    context.fillRect(0, 335, 500, 5);
}

function getSquareCoordinates(squareNumber) {
    const actualCellSize = 160;
    const lineThickness = 10;

    let x = 0;
    let y = 0;

    const row = Math.floor(squareNumber / 3);
    const col = squareNumber % 3;

    x = col * actualCellSize + col * lineThickness;
    y = row * actualCellSize + row * lineThickness;

    return { x: x, y: y };
}
const markPadding = 15;
const actualCellSize = 160;
const markSize = actualCellSize - (markPadding * 2);

function drawbot(squareNumber) {
    const coords = getSquareCoordinates(squareNumber);

    context.fillStyle = 'red';
    context.fillRect(coords.x + markPadding, coords.y + markPadding, markSize, markSize);
}

function drawplayer(squareNumber) {
    const coords = getSquareCoordinates(squareNumber);

    context.fillStyle = 'blue';
    context.fillRect(coords.x + markPadding, coords.y + markPadding, markSize, markSize);
}
function checkWin() {
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return boardState[a]; 
        }
    }
    if (squaresopen.length === 0) {
        return 'draw';
    }

    return null; 
}
function endGame(result) {
    if (result === 'draw') {
        turnd.innerHTML = 'Game Over: It\'s a Draw!';
    } else {
        turnd.innerHTML = `Game Over: ${result.toUpperCase()} Wins!`;
    }
    input.disabled = true;
    enter.disabled = true;
}
function botturn() {
    if (squaresopen.length === 0) {
        return;
    }

    const randomIndex = Math.floor(Math.random() * squaresopen.length);
    const chosenSquareValue = squaresopen[randomIndex];

    drawbot(chosenSquareValue);
    squaresopen.splice(randomIndex, 1);
    turn = 'player';
    turnd.innerHTML = 'Player';
    input.value = ''
}
function playerturn() {
    const playerInput = input.value;
    const chosenSquare = parseInt(playerInput, 10);
    if (isNaN(chosenSquare) || chosenSquare < 0 || chosenSquare > 8 || boardState[chosenSquare] !== '') {
        alert("Invalid move! Please enter an available square number (0-8).");
        input.value = '';
        return;
    }
    drawplayer(chosenSquare);
    boardState[chosenSquare] = 'player'; 
    const indexInSquaresOpen = squaresopen.indexOf(chosenSquare);
    if (indexInSquaresOpen !== -1) {
        squaresopen.splice(indexInSquaresOpen, 1);
    }
    input.value = ''; 
    let winner = checkWin();
    if (winner) {
        endGame(winner);
    } else {
        turn = 'computer';
        turnd.innerHTML = 'Computer';
        setTimeout(botturn, 500);
    }
}

enter.addEventListener('click', playerturn);
input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        if (turn === 'player') {
            playerturn();
        }
    }
});
drawbackground();
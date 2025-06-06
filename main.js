canvas = document.getElementById('canvas')
input = document.getElementById('input')
context = canvas.getContext('2d')
enter = document.getElementById('enter')
canvas.width = 500
canvas.height = 500
squaresopen = [0, 1, 2, 3, 4, 5, 6, 7, 8]

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

function drawbot(squareNumber) {
    const coords = getSquareCoordinates(squareNumber);

    context.fillStyle = 'red';
    context.fillRect(coords.x, coords.y, 166, 166);
}
function drawplayer(square) {
    const coords = getSquareCoordinates(square);

    context.fillStyle = 'blue';
    context.fillRect(coords.x, coords.y, 166, 166);
}
function botturn() {
    if (squaresopen.length === 0) {
        return;
    }

    const randomIndex = Math.floor(Math.random() * squaresopen.length);
    const chosenSquareValue = squaresopen[randomIndex];

    drawbot(chosenSquareValue);
    squaresopen.splice(randomIndex, 1);
}
function playerturn() {
    const playerInput = input.value;
    const chosenSquare = parseInt(playerInput, 10);
    const indexInSquaresOpen = squaresopen.indexOf(chosenSquare);
    if (indexInSquaresOpen !== -1) { 
        drawplayer(chosenSquare);
        squaresopen.splice(indexInSquaresOpen, 1);
}
}
enter.addEventListener('click', playerturn);
input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        playerturn();
    }
});
drawbackground();
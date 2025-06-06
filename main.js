canvas = document.getElementById('canvas')
input = document.getElementById('input')
enter = document.getElementById('enter')
context = canvas.getContext('2d')
canvas.width = 500
canvas.height = 500
squaresopen = [0, 1, 2, 3, 4, 5, 6, 7, 8]

function drawbackground() {
    context.fillStyle = 'black'
    context.fillRect(166, 0, 10, 500)
    context.fillRect(333, 0, 10, 500)
    context.fillRect(0, 166, 500, 10)
    context.fillRect(0, 333, 500, 10)
}

function getSquareCoordinates(squareNumber) {
    const cellSize = 166;
    const lineThickness = 10;

    let x = 0;
    let y = 0;

    const row = Math.floor(squareNumber / 3);
    const col = squareNumber % 3;

    if (col === 0) {
        x = 0;
    } else if (col === 1) {
        x = cellSize + lineThickness;
    } else {
        x = (cellSize * 2) + (lineThickness * 2);
    }

    if (row === 0) {
        y = 0;
    } else if (row === 1) {
        y = cellSize + lineThickness;
    } else {
        y = (cellSize * 2) + (lineThickness * 2);
    }

    return { x: x, y: y };
}

function drawbot(squareNumber) {
    const coords = getSquareCoordinates(squareNumber);

    context.fillStyle = 'red';
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

drawbackground();
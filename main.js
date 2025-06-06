canvas = document.getElementById('canvas')
input = document.getElementById('input')
enter = document.getElementById('enter')
context = canvas.getContext('2d')
canvas.width = 500
canvas.height = 500
squaresopen = [0, 1, 2, 3, 4, 5, 6, 7, 8]
function drawbackground() {
    context.fillRect(166, 0, 10, 500)
    context.fillRect(333, 0, 10, 500)
    context.fillRect(0, 166, 500, 10)
    context.fillRect(0, 333, 500, 10)
}
function drawbot() {
    
}
function botturn() {
    botsquare = Math.floor(Math.random() * squaresopen.length-1);
    squaresopen.remove(botsquare)
    drawbot(squaresopen[botsquare])
}
drawbackground()
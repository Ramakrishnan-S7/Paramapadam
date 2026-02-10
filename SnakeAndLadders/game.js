let currentSquare = 1;

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    document.getElementById('game-message').innerText = "You rolled a " + roll + "!";
    currentSquare += roll;
    if (currentSquare >= 121) {
        currentSquare = 121;
        document.getElementById('game-message').innerText = "Moksha Attained! (100)";
    }
    document.getElementById('current-square').innerText = "Square: " + currentSquare;
    moveToken(currentSquare);
}

function moveToken(square) {
    const token = document.getElementById('player-token');

    // 1. Each tile is exactly 1/11th of the board
    const tileSize = 100 / 11; // Approximately 9.09%

    let row = Math.floor((square - 1) / 11);
    let col = (square - 1) % 11;

    // 2. Snaking Logic:
    // On this board, Row 0 goes Left -> Right.
    // Row 1 goes Right -> Left.
    if (row % 2 !== 0) {
        col = 10 - col; // Reverse column for odd rows
    }

    // 3. Calculate position
    // We subtract a little (like 2%) to center the token in the square
    let bottomPos = (row * tileSize) + 2;
    let leftPos = (col * tileSize) + 2;

    token.style.bottom = bottomPos + "%";
    token.style.left = leftPos + "%";
}

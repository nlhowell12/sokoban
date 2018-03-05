const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW"
];
var originalHtml = document.body.innerHTML

let board = [];
for (let b=0; b < map.length; b++) {
    board[b] = map[b].split("");
}



document.addEventListener('keydown', (event) =>{
    const keyEvent = event.key;
    if (keyEvent == 'ArrowRight') {
        for (let y=0; y < board.length; y++){
            for (let x=0; x < board[y].length; x++) {
                if (board[y][x] == "S" && board[y][x+1] != "W" && (x+1) != board[y].length) {
                    if (board[y][x+1] === "F") {
                        alert("You Win!")
                    }
                    board[y][x+1] = "S";
                    board[y][x] = " ";
                    break;                                          
                }
            }
        }
        document.body.innerHTML = originalHtml;
        drawBoard();
    }
    else if (keyEvent == "ArrowLeft") {
        for (let y=0; y < board.length; y++){
            for (let x=0; x < board[y].length; x++) {
                if (board[y][x] == "S" && board[y][x-1] != "W" && x != 0) {
                    if (board[y][x-1] === "F") {
                        alert("You Win!")
                    }
                    board[y][x-1] = "S";
                    board[y][x] = " ";
                    break;                                          
                }
            }
        }
        document.body.innerHTML = originalHtml;
        drawBoard();
    }
    else if (keyEvent == "ArrowUp") {
        for (let y=0; y < board.length; y++){
            for (let x=0; x < board[y].length; x++) {
                if (board[y][x] == "S" && board[y-1][x] != "W" && y != 0) {
                    if (board[y-1][x] === "F") {
                        alert("You Win1!");
                    }
                    board[y-1][x] = "S";
                    board[y][x] = " ";
                    break;                                          
                }
            }
        }
        document.body.innerHTML = originalHtml;
        drawBoard();
    }
    else if (keyEvent == "ArrowDown") {
        outer:
        for (let y=0; y < board.length; y++){
            for (let x=0; x < board[y].length; x++) {
                if (board[y][x] == "S" && board[y+1][x] != "W") {
                    if (board[y+1][x] === "F");
                    board[y+1][x] = "S";
                    board[y][x] = " ";
                    break outer;                                          
                }
            }
        }
        document.body.innerHTML = originalHtml;
        drawBoard();
    }
})


function drawBoard () {
    for (let y=0; y<board.length; y++) {
        var getWrap = document.getElementById('wrap');
        let createRow = document.createElement('div')
        createRow.className = "row"
        createRow.id = "row-" + (y+1);
        getWrap.appendChild(createRow);
        for (let x=0; x < board[y].length; x++) {
            let getRow = document.getElementById('row-' + (y+1));
            let createCell = document.createElement('div');
            if (board[y][x] === "W") {
                getRow.appendChild(createCell);
                createCell.className = "wall";
            }
            else if (board[y][x] === " ") {
                getRow.appendChild(createCell);
                createCell.className = "cell";
            }
            else if (board[y][x] === "S") {
                getRow.appendChild(createCell);
                createCell.className = "cell";
                createCell.id = "playerIcon";
            }
            else if (board[y][x] === "F") {
                getRow.appendChild(createCell);
                createCell.className = "cell";
                createCell.id = "finish";
            }
        }
    }
}

drawBoard();

const map = [
    "  WWWWW ",
    "WWW   W ",
    "WOSB  W ",
    "WWW BOW ",
    "WOWWB W ",
    "W W O WW",
    "WB XBBOW",
    "W   O  W",
    "WWWWWWWW"
];

var originalHtml = document.body.innerHTML

var board = [];
for (let b = 0; b < map.length; b++) {
    board[b] = map[b].split("");
}

function checkWin() {
    let findStorage = document.querySelectorAll("#filledStorage").length;
    let win = "false";

    if (findStorage === 7) {
        win = "true";

        if (win = "true") {
            alert("You Win!");
            resetBoard();
        }
    }
}

function resetBoard() {
    document.body.innerHTML = originalHtml;
    board = [];
    for (let b = 0; b < map.length; b++) {
        board[b] = map[b].split("");
    }
    drawBoard();
}

document.addEventListener('keydown', (event) => {
    const keyEvent = event.key;
    if (keyEvent == 'ArrowRight') {
        for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[y].length; x++) {
                if (board[y][x] === "S" && board[y][x + 1] != "W" && (x + 1) != board[y].length && board[y][x + 1] != "B") {
                    if (board[y][x + 1] === "O") {
                        board[y][x + 1] = "SO";
                        board[y][x] = " ";
                        break;
                    } else if (board[y][x + 1] === "BO" && board[y][x + 2] != "W" && board[y][x + 2] != "B"){
                        board[y][x + 1] = "SO";
                        board[y][x + 2] = "B";
                        board[y][x] = " ";
                        break;
                    }
                    else if (board[y][x + 1] === " "){
                    board[y][x + 1] = "S";
                    board[y][x] = " ";
                    break;
                    }
                } else if (board[y][x] === "S" && board[y][x + 1] === "B" && board[y][x + 2] != "W" && board[y][x + 2] != "B" && board[y][x + 2] != "BO") {
                    if (board[y][x + 2] === "O") {
                        board[y][x + 2] = "BO";
                    } else {
                        board[y][x + 2] = "B";
                    }
                    board[y][x + 1] = "S";
                    board[y][x] = " "
                    break;
                } else if (board[y][x] === "S" && board[y][x + 1] === "O") {
                    board[y][x + 1] = "SO";
                    board[y][x] = " "
                    break;
                } else if (board[y][x] === "SO" && board[y][x + 1] != "W" && board[y][x + 1] != "B") {
                    board[y][x + 1] = "S";
                    board[y][x] = "O";
                    break;
                }
                else if (board[y][x] === "SO" && board[y][x + 1] != "W" && board[y][x + 1] === "B" && board[y][x + 2] != "B"  && board[y][x + 2] != "W" ) {
                    board[y][x + 2] = "B";
                    board[y][x + 1] = "S";
                    board[y][x] = "O";
                    break;
                }
            }
        }
        document.body.innerHTML = originalHtml;
        drawBoard();
        checkWin();
    } else if (keyEvent == "ArrowLeft") {
        outer: for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[y].length; x++) {
                if (board[y][x] === "S" && board[y][x - 1] != "W" && x != 0 && board[y][x - 1] != "B") {
                    if (board[y][x - 1] === "O") {
                        board[y][x - 1] = "SO"
                        board[y][x] = " "
                        break;
                    } else if (board[y][x] === "S" && board[y][x - 1] === "X") {
                        board[y][x - 1] = "SO";
                        board[y][x - 2] = "B"
                        board[y][x] = " ";
                        break;
                    }
                    else {
                        if (board[y][x] === "S" && board[y][x - 1] != "B" && board[y][x - 1] != "BO"){
                        board[y][x - 1] = "S"
                        board[y][x] = " "
                        break; 
                        }
                        else if (board[y][x] === "S" && board[y][x - 1] == "B" && board[y][x - 2] != "B" && board[y][x - 2] == "BO" && board[y][x - 2] != "W"){
                        board[y][x - 1] = "S";
                        board[y][x - 2] = "B";
                        board[y][x] = " ";
                        break; 
                        }
                        else if (board[y][x] === "S" && board[y][x - 1] === "BO" && board[y][x - 2] != "W" && board[y][x - 2] != "B") {
                        board[y][x - 1] = "SO";
                        board[y][x - 2] = "B";
                        board[y][x] = " ";
                        break;
                        }
                    }

                } else if (board[y][x] === "S" && board[y][x - 1] === "B" && board[y][x - 2] != "W" && board[y][x - 1] != "BO" && board[y][x - 2] != "X") {
                    if (board[y][x - 2] != "O") {
                        board[y][x - 1] = "S";
                        board[y][x - 2] = "B";
                    } else {
                        board[y][x - 1] = "S";
                        board[y][x - 2] = "BO";
                    }
                    board[y][x] = " ";
                    break;
                } else if (board[y][x] == "SO" && board[y][x - 1] != "W") {
                    if (board[y][x - 1] != "B") {
                        board[y][x - 1] = "S"
                        board[y][x] = "O"
                        break;
                    } else if (board[y][x - 2] != "B" && board[y][x - 2] != "W") {
                        board[y][x - 1] = "S";
                        board[y][x - 2] = "B";
                        board[y][x] = "O";
                        break;
                    }
                }

            }
        }
        document.body.innerHTML = originalHtml;
        drawBoard();
        checkWin();
    }
    else if (keyEvent == "ArrowUp") {
        outer:
        for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[y].length; x++) {
                if (board[y][x] === "S" && board[y - 1][x] != "W" && y != 0 && board[y - 1][x] != "B" && board[y - 1][x] != "BO") {
                    if (board[y - 1][x] != "O") {
                        board[y - 1][x] = "S";
                        board[y][x] = " ";
                        break outer;
                    } else {
                        
                        board[y - 1][x] = "SO";
                        board[y][x] = " ";
                        break outer;
                    }
                    
                } else if (board[y][x] === "S" && board[y - 1][x] === "B" && board[y - 2][x] != "W" && board[y - 2][x] != "B") {
                    if (board[y - 2][x] === "O") {
                        board[y - 1][x] = "S";
                        board[y - 2][x] = "BO";
                        board[y][x] = " ";
                        break outer;
                    } else {
                        board[y - 1][x] = "S";
                        board[y - 2][x] = "B";
                        board[y][x] = " ";
                        break outer;
                    }
                    
                } else if (board[y][x] == "SO" && board[y - 1][x] == "B" && board[y - 2][x] != "W" && board[y - 2][x] != "B") {
                    board[y - 2][x] = "B"
                    board[y - 1][x] = "S"
                    board[y][x] = "O"
                    break outer;
                } else if (board[y][x] == "S" && board[y - 1][x] == "BO" && board[y - 2][x] != "W" && board[y - 2][x] != "B") {
                    board[y - 2][x] = "B"
                    board[y - 1][x] = "SO"
                    board[y][x] = " "
                    break outer;
                } else if (board[y][x] == "SO" && board[y - 1][x] != "W" && board[y - 1][x] != "B") {
                    board[y - 1][x] = "S"
                    board[y][x] = "O"
                    break outer;

                }
            }
        }
        document.body.innerHTML = originalHtml;
        drawBoard();
        checkWin();
    } else if (keyEvent == "ArrowDown") {
        outer: for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[y].length; x++) {
                if (board[y][x] == "S" && board[y + 1][x] != "W" && board[y + 1][x] != "B") {
                    if (board[y + 1][x] != "O") {
                        if (board[y + 1][x] != "BO" && board[y + 1][x] != "X") {
                            board[y + 1][x] = "S";
                            board[y][x] = " ";
                            break outer;
                        } else if ( board[y + 2][x] != "W" && board[y + 2][x] != "B"){
                            board[y + 1][x] = "SO";
                            board[y + 2][x] = "B";
                            board[y][x] = " ";
                            break outer;
                        }
                    } else {
                        board[y + 1][x] = "SO";
                        board[y][x] = " ";
                        break outer;
                    }
                } else if (board[y][x] === "S" && board[y + 1][x] == "B" && board[y + 2][x] != "B" && board[y + 2][x] != "BO") {
                    if (board[y + 2][x] != "O" && board[y + 2][x] != "W") {
                        board[y + 1][x] = "S";
                        board[y + 2][x] = "B"
                        board[y][x] = " ";
                        break outer;
                    } else if (board[y + 2][x] != "W"){
                        board[y + 1][x] = "S";
                        board[y + 2][x] = "BO";
                        board[y][x] = " ";
                        break outer;
                    }
                } else if (board[y][x] === "SO" && board[y + 1][x] != "W") {
                    if (board[y + 1][x] === "B" && board[y + 2][x] != "O" && board[y + 2][x] != "BO" && board[y + 2][x] != "W") {
                        board[y + 1][x] = "S"
                        board[y + 2][x] = "B"
                        board[y][x] = "O"
                        break outer;
                    } else if (board[y + 2][x] != "W"){
                        if (board[y + 2][x] != "O"  && board[y + 2][x] != "W") {
                            board[y + 1][x] = "S"
                            board[y][x] = "O"
                            break outer;
                        } else if (board[y + 1][x] == "B" && board[y + 2][x] != "BO"){
                            board[y + 1][x] = "S"
                            board[y][x] = "O"
                            board[y + 2][x] = "BO"
                            break outer;
                        }
                        else {
                            board[y + 1][x] = "S";
                            board[y][x] = "O";
                            break outer;
                        }
                    }
                    else {
                        board[y + 1][x] = "S";
                        board[y][x] = "O";
                        break outer;
                    }
                }
            }
        }
        document.body.innerHTML = originalHtml;
        drawBoard();
        checkWin();
    }
})


function drawBoard() {
    for (let y = 0; y < board.length; y++) {
        var getWrap = document.getElementById('wrap');
        let createRow = document.createElement('div')
        createRow.className = "row"
        createRow.id = "row-" + (y + 1);
        getWrap.appendChild(createRow);
        for (let x = 0; x < board[y].length; x++) {
            let getRow = document.getElementById('row-' + (y + 1));
            let createCell = document.createElement('div');
            if (board[y][x] === "W") {
                getRow.appendChild(createCell);
                createCell.className = "wall";
            }
            if (board[y][x] === " ") {
                getRow.appendChild(createCell);
                createCell.className = "cell";
            }
            if (board[y][x] === "S") {
                getRow.appendChild(createCell);
                createCell.className = "cell";
                createCell.id = "playerIcon";
            }
            if (board[y][x] === "F") {
                getRow.appendChild(createCell);
                createCell.className = "cell";
                createCell.id = "finish";
            }
            if (board[y][x] === "B") {
                getRow.appendChild(createCell);
                createCell.className = "cell";
                createCell.id = "barrel";
            }
            if (board[y][x] === "O") {
                getRow.appendChild(createCell);
                createCell.className = "cell";
                createCell.id = "storage";
            }
            if (board[y][x] === "BO") {
                getRow.appendChild(createCell);
                createCell.className = "cell";
                createCell.id = "filledStorage";
            }
            if (board[y][x] === "SO") {
                getRow.appendChild(createCell);
                createCell.className = "cell";
                createCell.id = "playerIcon";
            }
            if (board[y][x] === "X") {
                getRow.appendChild(createCell);
                createCell.className = "cell";
                createCell.id = "filledStorage";
            }
        }
    }
}

drawBoard();
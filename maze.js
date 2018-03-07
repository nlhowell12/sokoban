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
].map(row => row.split(""));

var board = JSON.parse(JSON.stringify(map));

var originalHtml = document.body.innerHTML

function checkWin() {
    let findStorage = document.querySelectorAll("#filledStorage").length;
    if (findStorage === 7) {

        alert("You Win!");
        resetBoard();

    }
}

function resetBoard() {
    document.body.innerHTML = originalHtml;
    board = JSON.parse(JSON.stringify(map));
    drawBoard();
}

function getNextPositions(keyEvent, x, y) {
    let positions = {
        next: {
            x: x,
            y: y,
        },
        nextNext: {
            x: x,
            y: y,
        }
    };

    switch (keyEvent) {
        case 'ArrowRight':
            positions.next.x = x + 1;
            positions.nextNext.x = x + 2;
            break;

        case 'ArrowLeft':
            positions.next.x = x - 1;
            positions.nextNext.x = x - 2;
            break;

        case 'ArrowUp':
            positions.next.y = y - 1;
            positions.nextNext.y = y - 2;
            break;

        case 'ArrowDown':
            positions.next.y = y + 1;
            positions.nextNext.y = y + 2;
            break;
    }
    return positions;
}

document.addEventListener('keydown', (event) => {
    const keyEvent = event.key;
    outer:
        for (let y = 0; y < board.length; y++) {
            for (let x = 0; x < board[y].length; x++) {
                if (x === 2 && y === 2) {
                    debugger;
                }
                let {
                    next,
                    nextNext
                } = getNextPositions(keyEvent, x, y);
                if (board[y][x] === "S" && board[next.y][next.x] != "W" && (next.x) != board[next.y].length && board[next.y][next.x] != "B") {
                    if (board[next.y][next.x] === "O") {
                        board[next.y][next.x] = "SO";
                        board[y][x] = " ";
                        break outer;
                    } else if ((board[next.y][next.x] === "BO" || board[next.y][next.x] === "X") && board[nextNext.y][nextNext.x] != "W" && board[nextNext.y][nextNext.x] != "B") {
                        board[next.y][next.x] = "SO";
                        board[nextNext.y][nextNext.x] = "B";
                        board[y][x] = " ";
                        break outer;
                    } else if (board[next.y][next.x] === " ") {
                        board[next.y][next.x] = "S";
                        board[y][x] = " ";
                        break outer;
                    }
                } else if (board[y][x] === "S" && board[next.y][next.x] === "B" && board[nextNext.y][nextNext.x] != "W" && board[nextNext.y][nextNext.x] != "B" && board[nextNext.y][nextNext.x] != "BO") {
                    if (board[nextNext.y][nextNext.x] === "O") {
                        board[nextNext.y][nextNext.x] = "BO";
                    } else {
                        board[nextNext.y][nextNext.x] = "B";
                    }
                    board[next.y][next.x] = "S";
                    board[y][x] = " "
                    break outer;
                } else if (board[y][x] === "S" && board[next.y][next.x] === "O") {
                    board[next.y][next.x] = "SO";
                    board[y][x] = " "
                    break outer;
                } else if (board[y][x] === "SO" && board[next.y][next.x] != "W" && board[next.y][next.x] != "B") {
                    board[next.y][next.x] = "S";
                    board[y][x] = "O";
                    break outer;
                } else if (board[y][x] === "SO" && board[next.y][next.x] != "W" && board[next.y][next.x] === "B" && board[nextNext.y][nextNext.x] != "B" && board[nextNext.y][nextNext.x] != "W") {
                    if (board[nextNext.y][nextNext.x] === "O") {
                        board[nextNext.y][nextNext.x] = "BO";
                        board[next.y][next.x] = "S";
                    } else {
                        board[nextNext.y][nextNext.x] = "B";
                        board[next.y][next.x] = "S";
                    }
                    board[y][x] = "O";
                    break outer;
                }
            }
        }
    document.body.innerHTML = originalHtml;
    drawBoard();
    setTimeout(checkWin, 1000);

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
                createCell.id = "playerIconStorage";
            }
            if (board[y][x] === "X") {
                getRow.appendChild(createCell);
                createCell.className = "cell";
                createCell.id = "xFilledStorage";
            }
        }
    }
}

drawBoard();
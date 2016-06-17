/**
 * Created by shuvojit on 6/8/16.
 */

$(document).ready(function () {
    var a1 = $('#a1');
    var a2 = $('#a2');
    var a3 = $('#a3');
    var b1 = $('#b1');
    var b2 = $('#b2');
    var b3 = $('#b3');
    var c1 = $('#c1');
    var c2 = $('#c2');
    var c3 = $('#c3');
    var board = new Board();
    var player = 1;
    var count = 0;
    var gameOver = false;
    var playerAI = new Player_AI(board);
    var gameScorer = new GameScorer();
    var restartBtn = $('#restart');

    restartBtn.click(function () {
        board.resetGameBoard();
        count = 0;
        gameOver = false;
        playerAI = new Player_AI(board);
        player = 1;
        a1.text("");
        a2.text("");
        a3.text("");
        b1.text("");
        b2.text("");
        b3.text("");
        c1.text("");
        c2.text("");
        c3.text("");

    });

    a1.click(function () {
        markOnBoard('a1');
        setAiPlayerTurn();
    });

    a2.click(function () {
        markOnBoard('a2');
        setAiPlayerTurn();
    });

    a3.click(function () {
        markOnBoard('a3');
        setAiPlayerTurn();
    });

    b1.click(function () {
        markOnBoard('b1');
        setAiPlayerTurn();
    });

    b2.click(function () {
        markOnBoard('b2');
        setAiPlayerTurn();
    });

    b3.click(function () {
        markOnBoard('b3');
        setAiPlayerTurn();
    });

    c1.click(function () {
        markOnBoard('c1');
        setAiPlayerTurn();
    });

    c2.click(function () {
        markOnBoard('c2');
        setAiPlayerTurn();
    });

    c3.click(function () {
        markOnBoard('c3');
        setAiPlayerTurn();
    });


    function setAiPlayerTurn() {
        if (!gameOver && player == 2) {
            var boardPos = null;
            playerAI.setCurrentPlayer(player);
            if (count >= 3) {
                playerAI.setGameTreeDepth(0);
                boardPos = playerAI.getAITurn();
            }
            else {
                boardPos = playerAI.getPerfectPlayerBoardPos();
                /*console.log("///" + boardPos);*/
            }
            markOnBoard(boardPos);
        }
    }


    function markOnBoard(boardPos) {
        var mark = player == 1 ? 'x' : 'o';
        if (!gameOver && board.getBoardPosData(boardPos) === null) {
            var row = null;
            var col = null;
            board.setBoardData(boardPos, player);
            switch (boardPos) {
                case 'a1':
                    row = 0;
                    col = 0;
                    a1.text(mark);
                    break;
                case 'a2':
                    row = 0;
                    col = 1;
                    a2.text(mark);
                    break;
                case 'a3':
                    row = 0;
                    col = 2;
                    a3.text(mark);
                    break;
                case 'b1':
                    row = 1;
                    col = 0;
                    b1.text(mark);
                    break;
                case 'b2':
                    row = 1;
                    col = 1;
                    b2.text(mark);
                    break;
                case 'b3':
                    row = 1;
                    col = 2;
                    b3.text(mark);
                    break;
                case 'c1':
                    row = 2;
                    col = 0;
                    c1.text(mark);
                    break;
                case 'c2':
                    row = 2;
                    col = 1;
                    c2.text(mark);
                    break;
                case 'c3':
                    row = 2;
                    col = 2;
                    c3.text(mark);
                    break;
                default:
                    break;

            }
            var score = gameScorer.getScore(board.getCurrentBoardData(), player, row, col);
            console.log(score);
            if (score != null && score == 10) {
                gameOver = true;
            }
            else {
                count++;
                console.log(count);
                player = player == 1 ? 2 : 1;
            }

        }

        /*if(count == 3) {
         playerAI = new Player_AI(board.getCurrentBoardData(), player);
         playerAI.getAITurn();
         }*/

    }


});

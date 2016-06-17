/**
 * Created by shuvojit on 6/8/16.
 */
var Board = function () {

    var boardData = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    this.setBoardData = function(boardPos, currentPlayer){
        switch (boardPos){
            case 'a1':
                boardData[0][0] = currentPlayer;
                break;
            case 'a2':
                boardData[0][1] = currentPlayer;
                break;
            case 'a3':
                boardData[0][2] = currentPlayer;
                break;
            case 'b1':
                boardData[1][0] = currentPlayer;
                break;
            case 'b2':
                boardData[1][1] = currentPlayer;
                break;
            case 'b3':
                boardData[1][2] = currentPlayer;
                break;
            case 'c1':
                boardData[2][0] = currentPlayer;
                break;
            case 'c2':
                boardData[2][1] = currentPlayer;
                break;
            case 'c3':
                boardData[2][2] = currentPlayer;
                break;
            default:
                break;
        }
        console.log(boardData);
    };

    this.getBoardPosData = function(boardPos){
        var boardPosData = null;
        switch (boardPos){
            case 'a1':
                boardPosData = boardData[0][0];
                break;
            case 'a2':
                boardPosData = boardData[0][1];
                break;
            case 'a3':
                boardPosData = boardData[0][2];
                break;
            case 'b1':
                boardPosData = boardData[1][0];
                break;
            case 'b2':
                boardPosData = boardData[1][1];
                break;
            case 'b3':
                boardPosData = boardData[1][2];
                break;
            case 'c1':
                boardPosData = boardData[2][0];
                break;
            case 'c2':
                boardPosData = boardData[2][1];
                break;
            case 'c3':
                boardPosData = boardData[2][2];
                break;
            default:
                break;
        }
        return boardPosData;
    };
    
    this.getBoardPosKeyIndex = function (row, col) {
        var index = null;
        switch(row){
            case 0:
                switch (col){
                    case 0:
                        index = 'a1';
                        break;
                    case 1:
                        index = 'a2';
                        break;
                    case 2:
                        index = 'a3';
                        break;
                    default:
                        break;
                }
                break;
            case 1:
                switch (col){
                    case 0:
                        index = 'b1';
                        break;
                    case 1:
                        index = 'b2';
                        break;
                    case 2:
                        index = 'b3';
                        break;
                    default:
                        break;
                        
                }
                break;
            case 2:
                switch (col){
            case 0:
                index = 'c1';
                break;
            case 1:
                index = 'c2';
                break;
            case 2:
                index = 'c3';
                break;
            default:
                break;

            }
                break;
        }
        return index;
    };
    

    this.getCurrentBoardData = function () {
        return boardData;
    };

    this.resetGameBoard = function () {
        boardData = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }
};
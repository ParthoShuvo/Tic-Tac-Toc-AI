/**
 * Created by shuvojit on 6/9/16.
 */
var GameScorer = function () {
    /*var gameState = null;*/
   /* var player = player;
    var row = row;
    var col = col;*/

    this.getScore = function (gameState, player, row, col) {
        //console.log("generating score");
        var score = null;
        var i = 0;
        while(i < 4 && score != 10){
            switch (i){
                case 0:
                    score = checkVertical(gameState, player, col);
                    break;
                case 1:
                    var tmpScore = checkHorizontal(gameState, player, row);
                    score = score == 0 && tmpScore == null ? score : tmpScore;
                    break;
                case 2:
                    if(row == col){
                        var tmpScore = checkDiagonal(gameState, player);
                        score = score == 0 && tmpScore == null ? score : tmpScore;
                    }
                    break;
                case 3:
                    var tmpScore = checkAntiDiagonal(gameState, player);
                    score = score == 0 && tmpScore == null ? score : tmpScore;
                    break;
                default:
                    break;
            }
            i++;
        }
        score = score == 0 && hasEmptySpace(gameState) ? null : score;
        //console.log(gameState + " " + score);
        return score;
    };

    function checkVertical(gameState, player, col) {
        var res = 10;
        var flag = true;
        var count = 0;
        for (var i = 0; i < 3; i++) {
            //console.log(gameState);
            if (gameState[i][col] == null) {
                res = null;
                break;
            }
            else if(flag && gameState[i][col] != player){
                flag = false;
            }
            count++;
        }
        if(count == 3 && !flag && res != null){
            res = 0;
        }
        //console.log("vertical " + res);
        return res;
    };

    function checkHorizontal(gameState, player, row) {
        var res = 10;
        var flag = true;
        var count = 0;
        for (var i = 0; i < 3; i++) {
            if (gameState[row][i] == null) {
                res = null;
                break;
            }
            else if(flag && gameState[row][i] != player){
                
                flag = false;
            }
            count++;
        }
        if(count == 3 && !flag && res != null){
            res = 0;
        }
        //console.log("horizontal " + res);
        return res;
    };

    function checkDiagonal(gameState, player) {
        var res = 10;
        var flag = true;
        var count = 0;
        for(var i = 0; i < 3; i++){
            if(gameState[i][i] == null){
                res = null;
                break;
            }
            else if(flag && gameState[i][i] != player){
                flag = false;
            }
            count++;
        }
        if(count == 3 && !flag && res != null){
            res = 0;
        }
        //console.log("diagonal " + res);
        return res;
    };

    function checkAntiDiagonal(gameState, player){
        var res = 10;
        var flag = true;
        var count = 0;
        for(var i = 0; i < 3; i++) {
            if (gameState[i][(3 - 1) - i] == null) {
                res = null;
                break;
            } else if (flag && gameState[i][(3 - 1) - i] != player) {
                flag = false;
            }
            count++;
        }
        if(count == 3 && !flag && res != null){
            res = 0;
        }
        //console.log("anti diagonal " + res);
        return res;
    };

    function hasEmptySpace(gameState){
        var checker = false;
        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 3; j++){
                if(gameState[i][j] == null){
                    checker = true;
                    break;
                }
            }
            if(checker){
                break;
            }
        }
        return checker;
    };

}
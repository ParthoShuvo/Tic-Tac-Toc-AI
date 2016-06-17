/**
 * Created by shuvojit on 6/9/16.
 */
var GameNode = function(curGameState, val, row, col, depth){
    var gameState = curGameState;
    //var gameMode = null;
    var nodeVal = val;
    //var treeDepth = null;
    var givenRowPos = row;
    var givenColPos = col;
    var gameNodeDepth = depth;

    this.getGameState = function () {
        return gameState;
    };

    this.setGameState = function (curGameState) {
        gameState = curGameState;
    };

    /*this.getGameMode = function () {
        return gameMode;
    }

    this.setMode = function (mode) {
        gameMode = mode;
    }*/

    this.getNodeVal = function () {
        return nodeVal;
    };

    this.setNodeVal = function (val) {
        nodeVal = val;
    };

    this.getDepth = function () {
        return gameNodeDepth ;
    }

    this.setDepth = function (depth) {
        gameNodeDepth = depth;
    }

    this.getGivenRowPos = function () {
        return givenRowPos;
    }

    this.setGivenRowPos = function(row){
        givenRowPos = row;
    }

    this.getGivenColPos = function () {
        return givenColPos;
    }

    this.setGivenColPos = function (col) {
        givenColPos = col;
    }
};
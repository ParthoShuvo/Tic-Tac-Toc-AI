/**
 * Created by shuvojit on 6/9/16.
 */
var Player_AI = function (currentGameBoard) {

    var gameBoard = currentGameBoard;
    var currentGameState = gameBoard.getCurrentBoardData();
    var currentPlayer = null;
    var gameScorer = new GameScorer();
    var bestValue = null;
    var val = null;
    var gameTreeDepth = 0;
    var immediateChilds = null;


    this.getAITurn = function () {
        var currentNode = new GameNode(currentGameState, null, null, null, gameTreeDepth);
        var node = null;
        gameTreeDepth = 0;
        minimax(currentNode, currentPlayer, "max");
        //console.log("**Best Value:" + currentNode.getNodeVal());
        //console.log("depth: " + gameTreeDepth);
        //console.log("length" + immediateChilds.length);
        for (var i = immediateChilds.length - 1; i >= 0; i--) {
            node = immediateChilds[i];
            //console.log(node.getGameState());
            //console.log(node.getNodeVal());
            if (node.getNodeVal() == bestValue) {
                break;
            }
        }
        //console.log("final game state" + myNode.getGameState());
        return gameBoard.getBoardPosKeyIndex(node.getGivenRowPos(), node.getGivenColPos());

    };

    function minimax(node, player, mode) {
        if (node.getNodeVal() != null) {
            //console.log(mode);
            //console.log(node.getGameState());
            //console.log(node.getDepth);
            if (node.getNodeVal() == 10) {
                node.setNodeVal(10 - node.getDepth());
                return node.getNodeVal();
            }
            else if (node.getNodeVal() == -10) {
                node.setNodeVal(node.getDepth() - 10);
                return node.getNodeVal();
            }
            else {
                // console.log(0);
                return 0;
            }
        }
        var childNodes = getChildNodes(node, player);
        //gameTreeDepth++;
        if (mode == "max") {
            //console.log("max mode");
            bestValue = -32727;
            node.setNodeVal(bestValue);
            //console.log("player: " + player);
            //console.log("Parent: " + node.getGameState());

            for (var i = 0; i < childNodes.length; i++) {
                //console.log("Call: " + minChildNodes[i].getGameState());
                val = minimax(childNodes[i], 1, "min");
                //console.log(mode);
                //console.log("previous best " + node.getNodeVal());
                //val = minChildNodes[i].getNodeVal();
                //console.log("Value: " + val);
                bestValue = Math.max(node.getNodeVal(), val);
                node.setNodeVal(bestValue);
                //console.log("now best " + node.getNodeVal());
                //console.log(bestValue);

            }
            //llStates.push(node);
            //return node.getNodeVal();
        }
        else if (mode != "max") {
            //console.log("min mode");
            bestValue = 32787;
            node.setNodeVal(bestValue);
            //console.log("player: " + player);
            //console.log("Parent: " + node.getGameState());
            //var maxChildNodes = getChildNodes(node, player);
            for (var i = 0; i < childNodes.length; i++) {
                //console.log("Call: " + maxChildNodes[i].getGameState());
                val = minimax(childNodes[i], 2, "max");
                //console.log("previous best " + node.getNodeVal());
                //console.log("Value: " + val);
                bestValue = Math.min(node.getNodeVal(), val);
                node.setNodeVal(bestValue);
                //console.log("now best " + node.getNodeVal());
                //console.log(bestValue);

            }
            //allStates.push(node);
            //return node.getNodeVal();
        }
        //console.log(node.getGameState());
        //console.log("final" + node.getNodeVal());
        //allStates.push(node);
        return node.getNodeVal();

    };


    function getChildNodes(node, player) {
        //console.log("game player: " + player);
        //gameTreeDepth++;
        //console.log("depth" + node.getDepth());
        var givenGameState = node.getGameState();
        var dupCurrentGameState = copyGameState(givenGameState);
        var childNodes = [];
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (dupCurrentGameState[i][j] == null) {
                    dupCurrentGameState[i][j] = player;
                    var newGameState = getNewGameState(givenGameState, player, i, j);
                    //console.log(newGameState);
                    var val = gameScorer.getScore(newGameState, player, i, j);
                    var score = val != null && val == 10 && currentPlayer != player ? -10 : val;
                    childNodes.push(new GameNode(newGameState, score, i, j, node.getDepth() + 1));
                    gameTreeDepth = node.getDepth() + 1;
                }
            }
        }
        if (gameTreeDepth == 1) {
            immediateChilds = childNodes;
        }
        return childNodes;
    };

    function getNewGameState(currentGameState, player, row, col) {
        var dupGameState = copyGameState(currentGameState);
        dupGameState[row][col] = player;
        //console.log(dupGameState);
        return dupGameState;
        //console.log("Original Game State" + currentGameState);
    };

    function copyGameState(currentGameState) {
        var copiedGameState = [];
        for (var i = 0; i < currentGameState.length; i++) {
            copiedGameState[i] = [];
            for (var j = 0; j < currentGameState[i].length; j++) {
                copiedGameState[i][j] = currentGameState[i][j];
            }
        }
        return copiedGameState;
    };

    this.getRandomBoardPos = function () {
        var validPos = false;
        var row = null;
        var col = null;
        var indexKey = null;
        while (!validPos) {
            row = Math.floor(Math.random() * (3 - 0));
            col = Math.floor(Math.random() * (3 - 0));
            if (gameBoard.getBoardPosData(indexKey = gameBoard.getBoardPosKeyIndex(row, col)) == null) {
                validPos = true;
            }
        }
        //console.log("call");
        return indexKey;
    };

    this.getPerfectPlayerBoardPos = function () {
        var oppositionPlayerPositionIndex = null;
        var indexKey = null;
        var flagFound = false;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                oppositionPlayerPositionIndex = gameBoard.getBoardPosKeyIndex(i, j);
                if (gameBoard.getBoardPosData(oppositionPlayerPositionIndex) != null) {
                    flagFound = true;
                    break;
                }
            }
            if (flagFound) {
                break;
            }
        }
        /*console.log(gameBoard.getCurrentBoardData());
         console.log(oppositionPlayerPositionIndex);*/
        switch (oppositionPlayerPositionIndex) {
            case 'a1':
            case 'a3':
            case 'c1':
            case 'c3':
                indexKey = 'b2';
                break;
            case 'a2':
            case 'b1':
            case 'b2':
                indexKey = 'a1';
                break;
            case 'b3':
                indexKey = 'a3';
                break;
            case 'c2':
                indexKey = 'a2';
                break;
        }
        console.log(indexKey);
        return indexKey;
    };


    this.getCurrentPlayer = function () {
        return currentPlayer;
    };

    this.setCurrentPlayer = function (player) {
        currentPlayer = player;
    };

    this.gameTreeDepth = function () {
        return gameTreeDepth;
    };

    this.setGameTreeDepth = function (depth) {
        gameTreeDepth = depth;
    }

};
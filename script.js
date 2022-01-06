const gameBoard = (function() {
let playerMoves = [null,null,null,null,null,null,null,null,null]
let listItems = document.getElementsByTagName('li')
let placeMoves = function() {playerMoves.forEach((item, index) => listItems[index].textContent = playerMoves[index])}

return {playerMoves, listItems, placeMoves}

})()




const playerFactory = (function (name) {
    let playerInfo = {
    } 
    let inputs = document.querySelectorAll('input');

    let addPlayers = function () {
        playerInfo.playerOne = inputs[0].value
        playerInfo.playerTwo = inputs[1].value
    }
    return {playerInfo, addPlayers}
})()




const displayController = (function () {
    let resetGame = function() {
        console.log(gameBoard.playerMoves)
        for (i=0; i<9; i++) {
            gameBoard.playerMoves[i] = null;
        }
        gameBoard.placeMoves()
        document.getElementById('winnerText').textContent = '';
        gameController.gameEnded[0] = false;
        gameController.moveNumber[0] = 0
    }

    let form = document.getElementById("form");
    let inputs = document.querySelectorAll('input');
    let inputChecker = () => {
        if (inputs[0].checkValidity() == true && inputs[1].checkValidity() == true) {
            form.classList.add('hidden')
        }
    }    
    document.getElementById("play").addEventListener("click", inputChecker)

    let printWinner = function(winner) {
        if (winner == 'x') {
            document.getElementById('winnerText').textContent = `${playerFactory.playerInfo.playerOne} is the winner!`
        }
        else if (winner == 'o') { 
            document.getElementById('winnerText').textContent = `${playerFactory.playerInfo.playerTwo} is the winner!`
        }
        else if (winner == 'draw') {
            document.getElementById('winnerText').textContent = `It's a Tie.`
        }
    }

        document.getElementById('play').addEventListener('click', playerFactory.addPlayers)

        let rematch = document.getElementById('rematch').addEventListener('click', resetGame)
        
    
    
    return {printWinner, inputs, rematch,resetGame}
    
})()




const gameController = (function () {
    
    let listItemArray = [...gameBoard.listItems]
    let moveSelector = ['x', 'o', 'x', 'o' , 'x', 'o', 'x', 'o', 'x']
    let moveNumber = [0]
    let showButtons = function () {document.getElementById('buttonContainer').classList.remove('hideButtons')}
    let markSpot = function () {listItemArray.forEach((item, index) => item.addEventListener("click", () => {
        if (!gameBoard.playerMoves[index] && gameEnded[0] == false){
            gameBoard.playerMoves[index] = moveSelector[moveNumber[0]];
            gameBoard.placeMoves(); 
            winObj.forEach((item, index) => gameWin(item) )
            drawGame();
            moveNumber[0]++
        }
        else {return}
    }))}
    let gameEnded = [false];
    let moves = gameBoard.playerMoves
    
    let winObj = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    let gameWin = function([x,y,z]) {
        if(moves[x] == moves[y] && moves[x] == moves[z] && moves[x] && gameEnded[0] == false){
            displayController.printWinner(moves[x]);
            gameEnded[0] = true;
            showButtons();

        }

    } 
    let drawGame = function () {
        if (!moves.includes(null) && gameEnded[0] == false){
            gameEnded[0] = true;
            showButtons()
            displayController.printWinner('draw');
        }
    }
    markSpot()
    return {markSpot, gameEnded, moveNumber}
})()
                                            

